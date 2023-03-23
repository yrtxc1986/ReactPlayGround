interface MappingData {
  [key: string]: string;
}

const RegistrationMapping: MappingData = {
  "ONLINE-REGISTRA-TODATAC1": "/registration/document-vetting",
  "ONLINE-REGISTRA-TODATAC2": "/registration/document-vetting",
  "ONLINE-REGISTRA-TODATACSPV": "/registration/document-vetting-supervisor",
  "ONLINE-REGISTRA-TOMDATAC1": "/registration/document-vetting",
  "ONLINE-REGISTRA-TOMDATAC2": "/registration/document-vetting",
  "ONLINE-REGISTRA-TOMDATACSP": "/registration/document-vetting-supervisor",
};

export const RedirectUrlMappingData: MappingData = {
  ...RegistrationMapping,
};

// http://localhost:5173/admin/page/redirect?ObjectID=2022-09-30-17.10.02.978620T01&UNIT=SAMPLEBA&ACTY=MBTRFIN&DDEM=OFFLINE&DDES=REGISTRA&STAT=TODATAC1