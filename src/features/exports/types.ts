export type ExportStatus = 'Ready for Download' | 'Generating' | 'Failed';

export interface ExportPackage {
  id: string; // e.g. exp_01JTS2XDW...
  name: string; // e.g. ApexGrip_AG-2_US-ROB-GRIP-001...
  assessmentName: string; // e.g. ApexGrip AG-2
  assessmentCode: string; // e.g. ASM-APEXGRIP-US
  productName: string; // e.g. ApexGrip AG-2
  productCode: string; // e.g. AG-2
  market: 'US' | 'EU' | 'JP';
  patent: string; // e.g. US-ROB-GRIP-001
  claim: string; // e.g. Claim 1 or All Claims
  formats: ('Word' | 'Excel' | 'Evidence' | 'PDF')[];
  status: ExportStatus;
  generatedBy: string; // e.g. Alice Maintainer
  generatedAt: string; // ISO date / formatted date
  lastDownloaded: string | null; // e.g. "May 12, 2025" or Null
}

export type PageStates = 'default' | 'loading' | 'empty' | 'error' | 'permissionDenied';
