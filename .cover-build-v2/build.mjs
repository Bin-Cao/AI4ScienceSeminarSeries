import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const root = '/Users/jacob/Documents/GitHub/AI4ScienceSeminarSeries';
const work = path.join(root, 'cover');
const build = path.join(root, '.cover-build-v2');
const assets = path.join(work, 'assets-v2');
const skill = '/Users/jacob/.codex/plugins/cache/openai-primary-runtime/presentations/26.1013.11914/skills/presentations';
const runtime = '/Users/jacob/.cache/codex-runtimes/codex-primary-runtime/dependencies';
process.env.RUNTIME_NODE_MODULES = path.join(runtime, 'node/node_modules');
const { finalizePresentation } = await import(path.join(skill, 'container_tools/artifact_tool_utils.mjs'));

const p = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const s = p.slides.add();
const green = '#193E31', muted = '#59665E', cream = '#F7F6F1', terracotta = '#9C634A';
s.background.fill = cream;

function text(name, value, x, y, w, h, size, color = green, bold = false, align = 'left') {
  const box = s.shapes.add({ name, geometry: 'textbox', position: { left: x, top: y, width: w, height: h }, fill: 'none', line: { fill: 'none', width: 0 } });
  box.text = value;
  box.text.style = { typeface: 'Arial', fontSize: size, color, bold, alignment: align, verticalAlignment: 'top', autoFit: 'none', wrap: 'none', insets: 0 };
  return box;
}
function line(name, x, y, w, color = '#CDD4CA') {
  return s.shapes.add({name, geometry:'line', position:{left:x, top:y, width:w, height:0}, fill:'none', line:{fill:color,width:1}});
}
async function image(name, file, x, y, w, h, extra={}) {
  return s.images.add({blob:new Uint8Array(await fs.readFile(file)), contentType:/\.png$/i.test(file)?'image/png':'image/jpeg', alt:name, fit:'contain',position:{left:x,top:y,width:w,height:h},...extra});
}

await image('Unpacked Seminar emblem', path.join(assets,'image1.png'), 60, 40, 42, 42);
text('Forum name', 'UNPACKED SEMINAR', 118, 39, 640, 35, 27, green, true);
text('Forum purpose', 'An AI for Science forum for young researchers', 118, 76, 655, 25, 16, muted);
text('Date', '24 OCT 2026', 870, 42, 350, 30, 22, green, true, 'right');
text('Time and language', '15:00 Beijing (UTC+8) / Talk in Chinese', 840, 78, 380, 23, 16, muted, false, 'right');
line('Header divider',60,118,1160);

text('Session label','SESSION 001',60,145,300,24,16,terracotta,true);
text('Talk title line 1','AI for PDEs in',60,184,750,68,53,green,true);
text('Talk title line 2','Computational Mechanics',60,247,775,68,53,green,true);
text('Forum principle','Real tech. Real experience.',60,325,740,31,22,muted);

await image('Conceptual illustration of a finite-element surface, generated with imagegen',path.join(assets,'computational-mechanics.png'),840,165,380,253.333);

await image('Yizheng Wang, original photograph',path.join(root,'site/dist/assets/committee/yizheng-wang.jpeg'),60,390,64,90,{fit:'cover',crop:{left:0.46,top:0,right:0.04,bottom:0}});
text('Speaker role','SPEAKER',141,387,285,20,13,terracotta,true);
text('Speaker name','Yizheng Wang',141,410,285,32,26,green,true);
text('Speaker affiliation','PhD Student, Tsinghua University',141,447,295,23,16,muted);

await image('Bin Cao, original photograph',path.join(root,'site/dist/assets/committee/bin-cao.jpg'),463,390,64,90,{fit:'cover'});
text('Host role','INVITER / HOST',544,387,275,20,13,terracotta,true);
text('Host name','Bin Cao',544,410,275,32,26,green,true);
text('Host affiliation','Huawei Noah’s Ark Lab, London',544,447,280,23,16,muted);

line('Topics divider',60,503,755);
text('Methods heading','METHODS',60,525,130,23,13,terracotta,true);
text('Methods description','Physics-driven, data-driven and hybrid approaches',180,519,640,30,19,green);
text('Applications heading','APPLICATIONS',60,562,130,23,13,terracotta,true);
text('Applications description','Forward and inverse problems in solid mechanics',180,556,640,30,19,green);

text('Follow label','Stay connected',850,447,185,28,20,green,true);
text('WeChat name','SciMindBin',850,481,185,28,22,green,true);
text('WeChat instruction','Scan with WeChat',850,515,185,23,16,muted);
text('Website','ai4s.hk.cn',850,550,185,30,22,green,true).text.get('ai4s.hk.cn').link={uri:'https://ai4s.hk.cn',isExternal:true};
await image('Original SciMindBin WeChat QR code',path.join(assets,'image2.jpeg'),1076,440,144,144);

s.shapes.add({name:'Waiting footer background',geometry:'rect',position:{left:0,top:618,width:1280,height:102},fill:green,line:{fill:'none',width:0}});
text('Waiting status','We’ll begin shortly',60,634,700,45,34,cream,true);
text('Microphone reminder','Please keep your microphone muted.',60,680,700,25,17,'#D6E0D6');
text('Live discussion','Live discussion only',850,641,370,31,23,cream,true);
text('Recording policy','No recordings. No replays.',850,678,370,26,18,'#D6E0D6');

s.speakerNotes.text = 'Source: repository README.md and site/dist/content.js, session 001. Confirmed session: 24 October 2026, 15:00 Beijing UTC+8, Chinese. Speaker: Yizheng Wang, PhD student at Tsinghua University. Host: Bin Cao, Huawei Noah’s Ark Lab, London. QR code and emblem are embedded unchanged from cover/unpacked-seminar-waiting-en.pptx. The mesh is conceptual artwork generated with the built-in imagegen tool, not simulation data. Prompt saved at cover/assets-v2/illustration-prompt.txt. All text is editable. Original cover is preserved.';

const draft=path.join(build,'candidate.pptx');
await (await PresentationFile.exportPptx(p)).save(draft);
await fs.writeFile(path.join(build,'preview.png'),new Uint8Array(await (await p.export({slide:s,format:'png',scale:1.5})).arrayBuffer()));
await fs.writeFile(path.join(build,'layout.json'),await (await s.export({format:'layout'})).text());
console.log('Preview written');
const source=path.join(work,'unpacked-seminar-waiting-en.pptx');
const result=await finalizePresentation({
  workspaceDir:root,candidatePath:draft,finalPath:path.join(work,'unpacked-seminar-waiting-en-v2.pptx'),
  pythonExecutable:path.join(runtime,'python/bin/python3'),
  integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit'],
  explicitTotalSlideCount:1,
  requiredNativeTableOwnerSlides:[],requiredNativeChartOwnerSlides:[],
  fontPolicy:{basis:'reference',families:['Arial'],referencePath:source,referenceSha256:createHash('sha256').update(await fs.readFile(source)).digest('hex')},
  verifyArtifactToolImport:true,
  receiptPath:path.join(build,'validation.json')
});
await fs.copyFile(path.join(build,'preview.png'),path.join(work,'unpacked-seminar-waiting-en-v2.png'));
console.log(JSON.stringify(result,null,2));
