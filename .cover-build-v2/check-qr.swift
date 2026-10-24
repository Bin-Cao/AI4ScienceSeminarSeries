import Foundation
import Vision
import ImageIO

var payloads: [String] = []
for path in CommandLine.arguments.dropFirst() {
    let request = VNDetectBarcodesRequest()
    request.revision = VNDetectBarcodesRequestRevision1
    request.usesCPUOnly = true
    request.symbologies = [.qr]
    let handler = VNImageRequestHandler(url: URL(fileURLWithPath: path), options: [:])
    try handler.perform([request])
    let found = (request.results ?? []).compactMap { $0.payloadStringValue }
    guard found.count == 1 else {
        fputs("QR decode failed: \(path), count=\(found.count)\n", stderr)
        exit(1)
    }
    payloads.append(found[0])
    print("Decoded one QR code: \(URL(fileURLWithPath: path).lastPathComponent)")
}
guard Set(payloads).count == 1 else { fputs("QR payload mismatch\n", stderr); exit(1) }
print("PASS: original and rendered QR payloads match")
