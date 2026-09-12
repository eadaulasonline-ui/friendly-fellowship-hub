from pathlib import Path
import base64
import hashlib

ROOT = Path(__file__).resolve().parent
PARTS = sorted((ROOT / "package").glob("part*.b64"))
EXPECTED_SHA256 = "8d2b635d10696bdec9b1acaa7f3564a46483ff026512306f25a537f475891e08"

if not PARTS:
    raise SystemExit("Nenhuma parte do pacote Fennix foi encontrada.")

payload = "".join(part.read_text(encoding="utf-8").strip() for part in PARTS)
data = base64.b64decode(payload, validate=True)
actual = hashlib.sha256(data).hexdigest()

if actual != EXPECTED_SHA256:
    raise SystemExit(f"Checksum inválido: {actual}")

output = ROOT / "fennix-pipeline-v3.13.zip"
output.write_bytes(data)
print(f"Pacote reconstruído: {output}")
print(f"SHA-256: {actual}")
