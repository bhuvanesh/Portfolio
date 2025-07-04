export function downloadVCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
ORG:WealthX Financial Solutions
TITLE:Founder & CEO
ADR:;;142 Esplanade East;North Vancouver;BC;V7L 4X9;Canada
TEL:+1-604-555-0123
EMAIL:jayan@jayanjayabal.com
URL:https://jayanjayabal.com
NOTE:Wealth Management & Venture Capital Expert
END:VCARD`;
  
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jayan-jayabal.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
