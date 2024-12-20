import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";

const disabledCodes = [
  {
    cod: "CHOABAN",
  },
  {
    cod: "STENCILABC",
  },
  {
    cod: "ABC-LABRADO",
  },
  {
    cod: "INN002",
  },
  {
    cod: "LAMCOM.1",
  },
  {
    cod: "LAMCOM.2",
  },
  {
    cod: "TMCH6",
  },
  {
    cod: "OUTLETA",
  },
  {
    cod: "ACE2",
  },
  {
    cod: "ACE",
  },
  {
    cod: "ACITRICO",
  },
  {
    cod: "CEN4519",
  },
  {
    cod: "660",
  },
  {
    cod: "87888",
  },
  {
    cod: "ARGLA",
  },
  {
    cod: "KINGAGUA",
  },
  {
    cod: "R036",
  },
  {
    cod: "ALAMB20",
  },
  {
    cod: "SM711",
  },
  {
    cod: "ALAS",
  },
  {
    cod: "FD3708",
  },
  {
    cod: "COT4074",
  },
  {
    cod: "COT4078",
  },
  {
    cod: "RUPHAS016",
  },
  {
    cod: "ARG101007",
  },
  {
    cod: "ARG1084",
  },
  {
    cod: "ARGALMBCA1101",
  },
  {
    cod: "34808",
  },
  {
    cod: "CEN7024",
  },
  {
    cod: "7473",
  },
  {
    cod: "MAH02P",
  },
  {
    cod: "OUTLETALMFLOR",
  },
  {
    cod: "BOTI016B",
  },
  {
    cod: "ALZA25X10",
  },
  {
    cod: "ALZA25X15",
  },
  {
    cod: "ALZA25X20",
  },
  {
    cod: "ALZA30X10",
  },
  {
    cod: "ALZA30X15",
  },
  {
    cod: "ALZA30X20",
  },
  {
    cod: "ALZOGRA",
  },
  {
    cod: "FLIPO.01",
  },
  {
    cod: "FPETF.AMA",
  },
  {
    cod: "FLECOLPET.01",
  },
  {
    cod: "PASTE125",
  },
  {
    cod: "PASTE107",
  },
  {
    cod: "PASTE115",
  },
  {
    cod: "DELIPRIMX1AM",
  },
  {
    cod: "WIL073.3",
  },
  {
    cod: "WIL062.11",
  },
  {
    cod: "D033",
  },
  {
    cod: "FPET.70",
  },
  {
    cod: "FPET.71",
  },
  {
    cod: "FPET.72",
  },
  {
    cod: "FPET.73",
  },
  {
    cod: "DELI2PUNTAAM",
  },
  {
    cod: "FLEESC.04",
  },
  {
    cod: "CHINANA",
  },
  {
    cod: "T03",
  },
  {
    cod: "COT4015",
  },
  {
    cod: "T10",
  },
  {
    cod: "LAMCOM.3",
  },
  {
    cod: "ANGEL",
  },
  {
    cod: "MULTI-MINI-ANGE",
  },
  {
    cod: "LAMCOM.46",
  },
  {
    cod: "LAMCOM.4",
  },
  {
    cod: "INN511",
  },
  {
    cod: "SIL05",
  },
  {
    cod: "SIL01",
  },
  {
    cod: "SIL06",
  },
  {
    cod: "SIL31",
  },
  {
    cod: "SIL32",
  },
  {
    cod: "SIL03",
  },
  {
    cod: "SIL02",
  },
  {
    cod: "SIL04",
  },
  {
    cod: "FLEESC.05",
  },
  {
    cod: "20054600",
  },
  {
    cod: "ANTGOLD",
  },
  {
    cod: "COT4087",
  },
  {
    cod: "COT4085",
  },
  {
    cod: "COT4089",
  },
  {
    cod: "SOLP0220",
  },
  {
    cod: "DBAP24",
  },
  {
    cod: "DBAP26",
  },
  {
    cod: "DBAP30",
  },
  {
    cod: "D080",
  },
  {
    cod: "LAMCOM90",
  },
  {
    cod: "LAMCOM.5",
  },
  {
    cod: "LAMCOM.6",
  },
  {
    cod: "2230",
  },
  {
    cod: "GA77",
  },
  {
    cod: "LAMCOM.55",
  },
  {
    cod: "S4",
  },
  {
    cod: "S2",
  },
  {
    cod: "FLEESC.06",
  },
  {
    cod: "R4",
  },
  {
    cod: "ASAFLOR - 32943",
  },
  {
    cod: "CBPEOSK",
  },
  {
    cod: "CBPEONIA",
  },
  {
    cod: "CBROSK",
  },
  {
    cod: "CBROSA",
  },
  {
    cod: "AFRYRSK",
  },
  {
    cod: "AMLCPASC",
  },
  {
    cod: "DLCRISSK",
  },
  {
    cod: "DLCRIS",
  },
  {
    cod: "AFRYR",
  },
  {
    cod: "GSCARSK",
  },
  {
    cod: "GSCAR",
  },
  {
    cod: "MCCUASK",
  },
  {
    cod: "MCTORCUA",
  },
  {
    cod: "MCFRUSK",
  },
  {
    cod: "MCFRUTI",
  },
  {
    cod: "SIL46",
  },
  {
    cod: "SM816",
  },
  {
    cod: "ARGAVEC/C102001",
  },
  {
    cod: "FLES07",
  },
  {
    cod: "KINGAG",
  },
  {
    cod: "710-754",
  },
  {
    cod: "710-750",
  },
  {
    cod: "710-650",
  },
  {
    cod: "710-756",
  },
  {
    cod: "710-759",
  },
  {
    cod: "710-762",
  },
  {
    cod: "710-766",
  },
  {
    cod: "710-752",
  },
  {
    cod: "710-764",
  },
  {
    cod: "710-758",
  },
  {
    cod: "AZI07",
  },
  {
    cod: "AZI01",
  },
  {
    cod: "241022",
  },
  {
    cod: "DEWAZNEGRX10",
  },
  {
    cod: "DEWAZRUBIX10",
  },
  {
    cod: "DEWAZTALCX10FR",
  },
  {
    cod: "FLIPO.02",
  },
  {
    cod: "FPETF.AZ",
  },
  {
    cod: "FPET.02",
  },
  {
    cod: "PASTE106",
  },
  {
    cod: "DELIPRIMX1A",
  },
  {
    cod: "WIL073.9",
  },
  {
    cod: "WIL062.8",
  },
  {
    cod: "FPET.22",
  },
  {
    cod: "20050402",
  },
  {
    cod: "LAMCOM.45",
  },
  {
    cod: "SNBB",
  },
  {
    cod: "D031",
  },
  {
    cod: "VCEC205R",
  },
  {
    cod: "B0208",
  },
  {
    cod: "19951",
  },
  {
    cod: "AX0691",
  },
  {
    cod: "MULTI-MINI-BALL",
  },
  {
    cod: "WIL079",
  },
  {
    cod: "CIERRAX6",
  },
  {
    cod: "BLON13",
  },
  {
    cod: "BLON15",
  },
  {
    cod: "BLON18",
  },
  {
    cod: "WINCOPOPS",
  },
  {
    cod: "4160881",
  },
  {
    cod: "4158011",
  },
  {
    cod: "4158010",
  },
  {
    cod: "DZ.03",
  },
  {
    cod: "4160882",
  },
  {
    cod: "4160883",
  },
  {
    cod: "POSAIMPCALAROSA",
  },
  {
    cod: "BAR03P",
  },
  {
    cod: "BAR01P",
  },
  {
    cod: "BAM10",
  },
  {
    cod: "F501",
  },
  {
    cod: "CODELATTEX250LE",
  },
  {
    cod: "BAM18",
  },
  {
    cod: "PASTE22",
  },
  {
    cod: "BAM14",
  },
  {
    cod: "BAM12",
  },
  {
    cod: "BAM16",
  },
  {
    cod: "BAM20",
  },
  {
    cod: "AGUI3147/8494",
  },
  {
    cod: "AGUI3164/7469",
  },
  {
    cod: "AGUI3155/7895",
  },
  {
    cod: "17241",
  },
  {
    cod: "LAMCOM.7",
  },
  {
    cod: "PS35",
  },
  {
    cod: "CAPI14",
  },
  {
    cod: "BACT24",
  },
  {
    cod: "DISCHEX24B",
  },
  {
    cod: "BBCT28",
  },
  {
    cod: "BBCT20",
  },
  {
    cod: "BBCT22",
  },
  {
    cod: "BBCT24",
  },
  {
    cod: "DISCO26",
  },
  {
    cod: "DISCO30B",
  },
  {
    cod: "BBCT35",
  },
  {
    cod: "CUAD24B",
  },
  {
    cod: "BBCCT28",
  },
  {
    cod: "CUAD35B",
  },
  {
    cod: "BBCRT42",
  },
  {
    cod: "BBRED18",
  },
  {
    cod: "BBREDN18",
  },
  {
    cod: "BCCT24",
  },
  {
    cod: "BBPT2525",
  },
  {
    cod: "BBM30",
  },
  {
    cod: "BASE24",
  },
  {
    cod: "BASE28",
  },
  {
    cod: "BASE30",
  },
  {
    cod: "DISCHEX24D",
  },
  {
    cod: "DISCO20",
  },
  {
    cod: "BDCT20",
  },
  {
    cod: "BDCT22",
  },
  {
    cod: "BDCT24",
  },
  {
    cod: "BDCT28",
  },
  {
    cod: "DISCO30D",
  },
  {
    cod: "BDCT35",
  },
  {
    cod: "CUAD24D",
  },
  {
    cod: "BDCRT28",
  },
  {
    cod: "CUAD35D",
  },
  {
    cod: "BDCRT42",
  },
  {
    cod: "BFRED18",
  },
  {
    cod: "BFREDN18",
  },
  {
    cod: "GIRAG",
  },
  {
    cod: "HO1818",
  },
  {
    cod: "HO1532",
  },
  {
    cod: "HO18R",
  },
  {
    cod: "BNAV26X26",
  },
  {
    cod: "DEC104",
  },
  {
    cod: "BPCT24",
  },
  {
    cod: "BPCT28",
  },
  {
    cod: "BPCT35",
  },
  {
    cod: "BPCRT42",
  },
  {
    cod: "BREC35X50",
  },
  {
    cod: "BBEN",
  },
  {
    cod: "BMBD",
  },
  {
    cod: "BBMC332",
  },
  {
    cod: "BB332",
  },
  {
    cod: "BRECT23",
  },
  {
    cod: "DEC121",
  },
  {
    cod: "BV30BAR",
  },
  {
    cod: "BV25CHA",
  },
  {
    cod: "BV25CRA",
  },
  {
    cod: "BV25CUE",
  },
  {
    cod: "BV30FHA",
  },
  {
    cod: "BBF25",
  },
  {
    cod: "BBF30",
  },
  {
    cod: "BBF35",
  },
  {
    cod: "BFGD25",
  },
  {
    cod: "BBFG30",
  },
  {
    cod: "BFGD30",
  },
  {
    cod: "BFGD35",
  },
  {
    cod: "BFGP25",
  },
  {
    cod: "BFGP30",
  },
  {
    cod: "BFGP35",
  },
  {
    cod: "BCMC25",
  },
  {
    cod: "BCMC30",
  },
  {
    cod: "BV25FLOR",
  },
  {
    cod: "BV25GEON",
  },
  {
    cod: "BV25GEOR",
  },
  {
    cod: "BV25GRB",
  },
  {
    cod: "BV30HHA",
  },
  {
    cod: "BV30HA",
  },
  {
    cod: "BV25HOL",
  },
  {
    cod: "BV30MAI",
  },
  {
    cod: "BV30MAII",
  },
  {
    cod: "BV30MV",
  },
  {
    cod: "BV25MAN",
  },
  {
    cod: "BV30MAN",
  },
  {
    cod: "BV25CO",
  },
  {
    cod: "BV30CO",
  },
  {
    cod: "BV30MN",
  },
  {
    cod: "BV25MARM",
  },
  {
    cod: "BB025",
  },
  {
    cod: "BOB25",
  },
  {
    cod: "BBO30",
  },
  {
    cod: "BASE",
  },
  {
    cod: "BBO35",
  },
  {
    cod: "BV30OTO",
  },
  {
    cod: "BB25",
  },
  {
    cod: "BB30",
  },
  {
    cod: "BB35",
  },
  {
    cod: "BV30GD",
  },
  {
    cod: "BV25GD",
  },
  {
    cod: "BV35GD",
  },
  {
    cod: "BASENEGRA",
  },
  {
    cod: "BV25GP",
  },
  {
    cod: "BV30GP",
  },
  {
    cod: "BV35GP",
  },
  {
    cod: "BBVGRJ25",
  },
  {
    cod: "BBVGRJ30",
  },
  {
    cod: "BBVGRJ35",
  },
  {
    cod: "BASENEGRA25",
  },
  {
    cod: "BASENEGRAM",
  },
  {
    cod: "BASENEGRA35",
  },
  {
    cod: "BV25V",
  },
  {
    cod: "BV30V",
  },
  {
    cod: "BV35V",
  },
  {
    cod: "BV25C",
  },
  {
    cod: "BV30C",
  },
  {
    cod: "BV35C",
  },
  {
    cod: "BV25D",
  },
  {
    cod: "BV30D",
  },
  {
    cod: "BV35D",
  },
  {
    cod: "BJSR25",
  },
  {
    cod: "BHOV25",
  },
  {
    cod: "BV25L",
  },
  {
    cod: "BV30L",
  },
  {
    cod: "BV35L",
  },
  {
    cod: "BLO25",
  },
  {
    cod: "BLO30",
  },
  {
    cod: "BLO35",
  },
  {
    cod: "BLPJ30",
  },
  {
    cod: "MDC25",
  },
  {
    cod: "MBQ30",
  },
  {
    cod: "BRMC30",
  },
  {
    cod: "BRMC30",
  },
  {
    cod: "BV30P",
  },
  {
    cod: "BV35P",
  },
  {
    cod: "BV35VR",
  },
  {
    cod: "BV25R",
  },
  {
    cod: "BV30R",
  },
  {
    cod: "BV35R",
  },
  {
    cod: "DEC106",
  },
  {
    cod: "DEC108",
  },
  {
    cod: "BV25PA",
  },
  {
    cod: "BV30PA",
  },
  {
    cod: "BV25PIE",
  },
  {
    cod: "BV30PIE",
  },
  {
    cod: "BV25RBB",
  },
  {
    cod: "BRED18",
  },
  {
    cod: "BREDN18",
  },
  {
    cod: "BV25ZIG",
  },
  {
    cod: "BRCT24",
  },
  {
    cod: "CUP2",
  },
  {
    cod: "FV91304",
  },
  {
    cod: "SM018",
  },
  {
    cod: "SIL38",
  },
  {
    cod: "SIL37",
  },
  {
    cod: "SIL54",
  },
  {
    cod: "S386",
  },
  {
    cod: "CIRBIAMOX1",
  },
  {
    cod: "CIRBISODX1",
  },
  {
    cod: "VI009",
  },
  {
    cod: "VE016",
  },
  {
    cod: "14905",
  },
  {
    cod: "NV13555",
  },
  {
    cod: "29972",
  },
  {
    cod: "29971",
  },
  {
    cod: "D-027",
  },
  {
    cod: "FLECOLPET.75",
  },
  {
    cod: "PASTE120",
  },
  {
    cod: "WIL073.4",
  },
  {
    cod: "FPET.76",
  },
  {
    cod: "COT4083",
  },
  {
    cod: "MSDORAD",
  },
  {
    cod: "PUNZ3",
  },
  {
    cod: "PUNZ8",
  },
  {
    cod: "PUNZ9",
  },
  {
    cod: "CA.132",
  },
  {
    cod: "131000015",
  },
  {
    cod: "34851",
  },
  {
    cod: "BMU1",
  },
  {
    cod: "BMU2",
  },
  {
    cod: "BMU3",
  },
  {
    cod: "BMU4",
  },
  {
    cod: "BMU5",
  },
  {
    cod: "BOTI025A",
  },
  {
    cod: "BOTI025B",
  },
  {
    cod: "BOLSAB",
  },
  {
    cod: "BOL019",
  },
  {
    cod: "BCC",
  },
  {
    cod: "CBR1",
  },
  {
    cod: "LAMCOM.72",
  },
  {
    cod: "LAMCOM.73",
  },
  {
    cod: "126539C",
  },
  {
    cod: "126539R",
  },
  {
    cod: "126539V",
  },
  {
    cod: "CHINTDL2655",
  },
  {
    cod: "CHINT2530",
  },
  {
    cod: "BOTONBANANAX3",
  },
  {
    cod: "463473K",
  },
  {
    cod: "MAPMARX3",
  },
  {
    cod: "BOTONESX10",
  },
  {
    cod: "CUORE",
  },
  {
    cod: "S351",
  },
  {
    cod: "BOTONES X 5",
  },
  {
    cod: "10020902",
  },
  {
    cod: "100209",
  },
  {
    cod: "4171007",
  },
  {
    cod: "4171008",
  },
  {
    cod: "4171004",
  },
  {
    cod: "4171089",
  },
  {
    cod: "FTE MEZCLADOR -",
  },
  {
    cod: "4171000",
  },
  {
    cod: "504105",
  },
  {
    cod: "KINGBBG",
  },
  {
    cod: "LAMCOM.63",
  },
  {
    cod: "LAMCOM.65",
  },
  {
    cod: "LAMCOM.62",
  },
  {
    cod: "LAMCOM.66",
  },
  {
    cod: "LAMCOM.61",
  },
  {
    cod: "FPET.03",
  },
  {
    cod: "WIL073.2",
  },
  {
    cod: "EDIBLEBB",
  },
  {
    cod: "T01",
  },
  {
    cod: "S441",
  },
  {
    cod: "200547",
  },
  {
    cod: "FLEESC.10",
  },
  {
    cod: "111914202",
  },
  {
    cod: "CCUIS",
  },
  {
    cod: "914202X250",
  },
  {
    cod: "CAC16",
  },
  {
    cod: "CAC3",
  },
  {
    cod: "VI049",
  },
  {
    cod: "CAC1",
  },
  {
    cod: "LAMCOMC1",
  },
  {
    cod: "CAC2",
  },
  {
    cod: "LAMCOMC2",
  },
  {
    cod: "LAMCOMC3",
  },
  {
    cod: "S129",
  },
  {
    cod: "S130",
  },
  {
    cod: "FLES11",
  },
  {
    cod: "DELY22CV",
  },
  {
    cod: "ICEPOP",
  },
  {
    cod: "TARS",
  },
  {
    cod: "CAJA30X20",
  },
  {
    cod: "CAJA25X25",
  },
  {
    cod: "BFV",
  },
  {
    cod: "BFVB",
  },
  {
    cod: "MH2",
  },
  {
    cod: "H1",
  },
  {
    cod: "BOX42X32",
  },
  {
    cod: "CAJA30X40",
  },
  {
    cod: "WINCAPKE",
  },
  {
    cod: "CK6",
  },
  {
    cod: "CAJA30X20C",
  },
  {
    cod: "DONUTS",
  },
  {
    cod: "BUD7.5",
  },
  {
    cod: "COXM",
  },
  {
    cod: "COXXL",
  },
  {
    cod: "COXXXL",
  },
  {
    cod: "CARTBAGL",
  },
  {
    cod: "CARTBGM",
  },
  {
    cod: "CARTBGL",
  },
  {
    cod: "MTAR",
  },
  {
    cod: "DRIP12",
  },
  {
    cod: "DRIP25",
  },
  {
    cod: "HEXADRIP25",
  },
  {
    cod: "DRIP32",
  },
  {
    cod: "HEXADRIP32",
  },
  {
    cod: "DRIP40",
  },
  {
    cod: "CHEESS",
  },
  {
    cod: "TAR",
  },
  {
    cod: "MID12",
  },
  {
    cod: "MID25",
  },
  {
    cod: "HEXAMID25",
  },
  {
    cod: "HEXAMID32",
  },
  {
    cod: "MID40",
  },
  {
    cod: "BIG12",
  },
  {
    cod: "BIG25",
  },
  {
    cod: "BIG32",
  },
  {
    cod: "BIG40",
  },
  {
    cod: "BIG45",
  },
  {
    cod: "MAC6",
  },
  {
    cod: "CK12M",
  },
  {
    cod: "CAJABOTI",
  },
  {
    cod: "BOTI019",
  },
  {
    cod: "2115-0014",
  },
  {
    cod: "710-0134",
  },
  {
    cod: "MR.1",
  },
  {
    cod: "S3121",
  },
  {
    cod: "S382",
  },
  {
    cod: "FLEESC.12",
  },
  {
    cod: "CEN2122",
  },
  {
    cod: "CEN2023",
  },
  {
    cod: "CAPI",
  },
  {
    cod: "PA10A",
  },
  {
    cod: "CAPBOM",
  },
  {
    cod: "S207",
  },
  {
    cod: "3DEF",
  },
  {
    cod: "S439",
  },
  {
    cod: "T06",
  },
  {
    cod: "S3167",
  },
  {
    cod: "T05",
  },
  {
    cod: "CARACOLES NEW",
  },
  {
    cod: "S3166",
  },
  {
    cod: "20055700",
  },
  {
    cod: "SM786",
  },
  {
    cod: "SIL45",
  },
  {
    cod: "SIL44",
  },
  {
    cod: "SIL42",
  },
  {
    cod: "SIL43",
  },
  {
    cod: "AM023",
  },
  {
    cod: "NJ010",
  },
  {
    cod: "NJ013",
  },
  {
    cod: "GA73",
  },
  {
    cod: "CEN7222",
  },
  {
    cod: "FD3753",
  },
  {
    cod: "BOTI026B",
  },
  {
    cod: "FPET.04",
  },
  {
    cod: "PASTE121",
  },
  {
    cod: "DELIPASTX1C",
  },
  {
    cod: "D028",
  },
  {
    cod: "FPET.77",
  },
  {
    cod: "FD3777",
  },
  {
    cod: "LAMCOM.67",
  },
  {
    cod: "LAMCOM.68",
  },
  {
    cod: "SOLP0420",
  },
  {
    cod: "SP0424",
  },
  {
    cod: "DBCP26",
  },
  {
    cod: "DBCP30",
  },
  {
    cod: "PIR5009X8C",
  },
  {
    cod: "KINGCELESTE",
  },
  {
    cod: "INN515",
  },
  {
    cod: "FLEESC.13",
  },
  {
    cod: "CERECARLE",
  },
  {
    cod: "EDIBLECG",
  },
  {
    cod: "FLEESC.14",
  },
  {
    cod: "MAPSA58-93",
  },
  {
    cod: "MAPSA58-95",
  },
  {
    cod: "GOTAALPI500",
  },
  {
    cod: "GOTAALPI1KG",
  },
  {
    cod: "CGRATER",
  },
  {
    cod: "FLEESC.16",
  },
  {
    cod: "PASTE03",
  },
  {
    cod: "KINGCHOCO",
  },
  {
    cod: "FLEESC.15",
  },
  {
    cod: "MAPSA58-86",
  },
  {
    cod: "MAPSA58-82",
  },
  {
    cod: "MAPSA58-78",
  },
  {
    cod: "AGUI6408",
  },
  {
    cod: "RC0566",
  },
  {
    cod: "RC0627",
  },
  {
    cod: "RC0603",
  },
  {
    cod: "14067",
  },
  {
    cod: "AGUI9985",
  },
  {
    cod: "COB01A",
  },
  {
    cod: "14067X250",
  },
  {
    cod: "MOLDSILICHOCABC",
  },
  {
    cod: "30667",
  },
  {
    cod: "121",
  },
  {
    cod: "CAPI15",
  },
  {
    cod: "PS23",
  },
  {
    cod: "B99332G",
  },
  {
    cod: "MAPCIRCULOS",
  },
  {
    cod: "R3",
  },
  {
    cod: "CAPI8",
  },
  {
    cod: "S662",
  },
  {
    cod: "FPET.79",
  },
  {
    cod: "H003",
  },
  {
    cod: "SM864",
  },
  {
    cod: "FS0002",
  },
  {
    cod: "FSF16",
  },
  {
    cod: "COCOBCOX250",
  },
  {
    cod: "CEN2037",
  },
  {
    cod: "FLEESC.18",
  },
  {
    cod: "COLA",
  },
  {
    cod: "S450",
  },
  {
    cod: "CMAI.DF.001",
  },
  {
    cod: "CMAI.DF.004",
  },
  {
    cod: "CMAI.DF.002",
  },
  {
    cod: "CMAI.DF.003",
  },
  {
    cod: "CMAI.DF.005",
  },
  {
    cod: "CMAI.DF.006",
  },
  {
    cod: "DECOMIX SET",
  },
  {
    cod: "WILTON",
  },
  {
    cod: "WIL054.9",
  },
  {
    cod: "WIL054.4",
  },
  {
    cod: "CH3157",
  },
  {
    cod: "CH3147",
  },
  {
    cod: "CH3136",
  },
  {
    cod: "CH3138",
  },
  {
    cod: "CH3140",
  },
  {
    cod: "CH3141",
  },
  {
    cod: "CH3142",
  },
  {
    cod: "CH3144",
  },
  {
    cod: "CH3150",
  },
  {
    cod: "CH3155",
  },
  {
    cod: "CH3152",
  },
  {
    cod: "CH3148",
  },
  {
    cod: "WIL090",
  },
  {
    cod: "CA.51",
  },
  {
    cod: "CA.51B",
  },
  {
    cod: "CA.52",
  },
  {
    cod: "CA.52B",
  },
  {
    cod: "4176138",
  },
  {
    cod: "CHINTMCH7",
  },
  {
    cod: "710-1159",
  },
  {
    cod: "32327200",
  },
  {
    cod: "PROCONPLAN1X1",
  },
  {
    cod: "PROCONPLAN2X100",
  },
  {
    cod: "PROCONPLAN3X100",
  },
  {
    cod: "PROCONPLAN4X1",
  },
  {
    cod: "PROCONPLAN5X1",
  },
  {
    cod: "CEN2209",
  },
  {
    cod: "BOTI030",
  },
  {
    cod: "BOTI030B",
  },
  {
    cod: "BOTI028",
  },
  {
    cod: "BOTI028B",
  },
  {
    cod: "BOTI029B",
  },
  {
    cod: "SM759",
  },
  {
    cod: "CAPI5",
  },
  {
    cod: "AM032",
  },
  {
    cod: "VI006",
  },
  {
    cod: "PASTE127",
  },
  {
    cod: "KINGFCORAL",
  },
  {
    cod: "CORTCORZ",
  },
  {
    cod: "710-0233",
  },
  {
    cod: "RJ001",
  },
  {
    cod: "17179",
  },
  {
    cod: "REP3515",
  },
  {
    cod: "CA.108",
  },
  {
    cod: "VI010",
  },
  {
    cod: "REPPAL15",
  },
  {
    cod: "INN047",
  },
  {
    cod: "REP4621",
  },
  {
    cod: "DROPSSUPERCORAZ",
  },
  {
    cod: "DROPSMIXDORADOP",
  },
  {
    cod: "INN214",
  },
  {
    cod: "FV9-12-03.05",
  },
  {
    cod: "CORAX4",
  },
  {
    cod: "CORAX5",
  },
  {
    cod: "SM745",
  },
  {
    cod: "MAPCORAZ",
  },
  {
    cod: "S3148",
  },
  {
    cod: "LAMCOM.8",
  },
  {
    cod: "WIL210",
  },
  {
    cod: "AZ001",
  },
  {
    cod: "VI008",
  },
  {
    cod: "S3161",
  },
  {
    cod: "S3169",
  },
  {
    cod: "S397",
  },
  {
    cod: "CORONAX2",
  },
  {
    cod: "CORONAX3",
  },
  {
    cod: "LAMCOM.9",
  },
  {
    cod: "S372",
  },
  {
    cod: "CHINT0880",
  },
  {
    cod: "CAVEN6",
  },
  {
    cod: "BOTI008B",
  },
  {
    cod: "EXPULSTARWARS",
  },
  {
    cod: "CA.129",
  },
  {
    cod: "CPC",
  },
  {
    cod: "BOTI023B",
  },
  {
    cod: "BOTI021B",
  },
  {
    cod: "BOTI002B",
  },
  {
    cod: "BOTI022B",
  },
  {
    cod: "C1195",
  },
  {
    cod: "C1187",
  },
  {
    cod: "C1199",
  },
  {
    cod: "C1344",
  },
  {
    cod: "C1345",
  },
  {
    cod: "C1346",
  },
  {
    cod: "C1348",
  },
  {
    cod: "C1350",
  },
  {
    cod: "C1352",
  },
  {
    cod: "C1353",
  },
  {
    cod: "C1354",
  },
  {
    cod: "C1355",
  },
  {
    cod: "C1356",
  },
  {
    cod: "C1357",
  },
  {
    cod: "C1358",
  },
  {
    cod: "C1359",
  },
  {
    cod: "C1360",
  },
  {
    cod: "C1362",
  },
  {
    cod: "C1363",
  },
  {
    cod: "C1364",
  },
  {
    cod: "FV91308",
  },
  {
    cod: "CORT0",
  },
  {
    cod: "CORT1",
  },
  {
    cod: "CORT2",
  },
  {
    cod: "CORT3",
  },
  {
    cod: "CORT4",
  },
  {
    cod: "CORT5",
  },
  {
    cod: "CORT6",
  },
  {
    cod: "CORT7",
  },
  {
    cod: "CORT8",
  },
  {
    cod: "CORT9",
  },
  {
    cod: "COA0200",
  },
  {
    cod: "BOTI006B",
  },
  {
    cod: "BOTI024B",
  },
  {
    cod: "CHIN51D5",
  },
  {
    cod: "CHIN1A10",
  },
  {
    cod: "CHINTS659",
  },
  {
    cod: "CHINT0238",
  },
  {
    cod: "CPINK",
  },
  {
    cod: "ENVIO",
  },
  {
    cod: "POA33",
  },
  {
    cod: "LEDEPARCHO",
  },
  {
    cod: "POC34H",
  },
  {
    cod: "CIRCEPASX1K",
  },
  {
    cod: "PROCREMTAR",
  },
  {
    cod: "CIOCREMTAR",
  },
  {
    cod: "CRUCES",
  },
  {
    cod: "S336",
  },
  {
    cod: "S3129",
  },
  {
    cod: "CAPI2",
  },
  {
    cod: "CUBIK",
  },
  {
    cod: "CUMET",
  },
  {
    cod: "21043805",
  },
  {
    cod: "36789",
  },
  {
    cod: "SM868",
  },
  {
    cod: "AM024",
  },
  {
    cod: "CUC",
  },
  {
    cod: "CUGT",
  },
  {
    cod: "FLEESC.100",
  },
  {
    cod: "902-1377",
  },
  {
    cod: "2116-2116",
  },
  {
    cod: "DAMA",
  },
  {
    cod: "FLEESC.19",
  },
  {
    cod: "LEDEGELBRIFRUX3",
  },
  {
    cod: "TITANIO",
  },
  {
    cod: "DAMSIL",
  },
  {
    cod: "DBLACKH",
  },
  {
    cod: "CIRCULO24",
  },
  {
    cod: "CIRCULO28",
  },
  {
    cod: "D086",
  },
  {
    cod: "D001",
  },
  {
    cod: "D003",
  },
  {
    cod: "D034",
  },
  {
    cod: "DGOLDI",
  },
  {
    cod: "SIL26",
  },
  {
    cod: "SIL24",
  },
  {
    cod: "SIL23",
  },
  {
    cod: "SIL25",
  },
  {
    cod: "SM830",
  },
  {
    cod: "AX7003SE",
  },
  {
    cod: "SF011",
  },
  {
    cod: "SF012",
  },
  {
    cod: "FPET.80",
  },
  {
    cod: "PASTE584",
  },
  {
    cod: "WIL073.6",
  },
  {
    cod: "7105520",
  },
  {
    cod: "D085",
  },
  {
    cod: "H001",
  },
  {
    cod: "SPDOR",
  },
  {
    cod: "SPDORC",
  },
  {
    cod: "SPDORP",
  },
  {
    cod: "LOVESUGARSN",
  },
  {
    cod: "LOVESUGARMP",
  },
  {
    cod: "LOVESUGAR",
  },
  {
    cod: "FLEESC.21",
  },
  {
    cod: "VC2092",
  },
  {
    cod: "2070",
  },
  {
    cod: "VC1056",
  },
  {
    cod: "17790244001658",
  },
  {
    cod: "FLEESC.20",
  },
  {
    cod: "EDIBLEPALET",
  },
  {
    cod: "SILIEMOJI",
  },
  {
    cod: "S3159",
  },
  {
    cod: "GA78",
  },
  {
    cod: "S3158",
  },
  {
    cod: "GMC194",
  },
  {
    cod: "E1",
  },
  {
    cod: "LAMCOME1",
  },
  {
    cod: "3DONDASSIRENA",
  },
  {
    cod: "ESCUDOS BOCA",
  },
  {
    cod: "ESCUDOS RIVER",
  },
  {
    cod: "SWALM",
  },
  {
    cod: "SWAVE",
  },
  {
    cod: "SWBAN",
  },
  {
    cod: "SWEETBUTTER",
  },
  {
    cod: "SWEETCAFE",
  },
  {
    cod: "SWEETCAPU",
  },
  {
    cod: "SWEETCHAMP",
  },
  {
    cod: "SWEETCHOC",
  },
  {
    cod: "SWCO",
  },
  {
    cod: "SWCRA",
  },
  {
    cod: "CH0203",
  },
  {
    cod: "WIL105",
  },
  {
    cod: "SWEETDDL",
  },
  {
    cod: "6042235",
  },
  {
    cod: "SWFRT",
  },
  {
    cod: "SWEETFRUTOS",
  },
  {
    cod: "SWLIM",
  },
  {
    cod: "SWEETMANT",
  },
  {
    cod: "SWEETMARA",
  },
  {
    cod: "SWEETMEREN",
  },
  {
    cod: "SWNAR",
  },
  {
    cod: "SWEETNUEZ",
  },
  {
    cod: "SWPS",
  },
  {
    cod: "SWPAN",
  },
  {
    cod: "SWPD",
  },
  {
    cod: "SWEETRHUM",
  },
  {
    cod: "SWEETSAN",
  },
  {
    cod: "SWEETROP",
  },
  {
    cod: "SWVGO",
  },
  {
    cod: "6042269",
  },
  {
    cod: "SWVAI",
  },
  {
    cod: "INN517",
  },
  {
    cod: "EM",
  },
  {
    cod: "YDGC197",
  },
  {
    cod: "WIL005",
  },
  {
    cod: "EP",
  },
  {
    cod: "CHINTEP32",
  },
  {
    cod: "CA1507",
  },
  {
    cod: "CEN3426",
  },
  {
    cod: "CEN1340",
  },
  {
    cod: "BOTI020B",
  },
  {
    cod: "ESPOX4",
  },
  {
    cod: "NJ040",
  },
  {
    cod: "AZ028",
  },
  {
    cod: "RUEDITA",
  },
  {
    cod: "ESTEX9",
  },
  {
    cod: "T04",
  },
  {
    cod: "CA.67",
  },
  {
    cod: "ESTRELLA",
  },
  {
    cod: "710-0236",
  },
  {
    cod: "MAPESTRE",
  },
  {
    cod: "R17",
  },
  {
    cod: "DEWMALTAX350",
  },
  {
    cod: "MP35",
  },
  {
    cod: "710-0131",
  },
  {
    cod: "20071100",
  },
  {
    cod: "SIL56",
  },
  {
    cod: "SM747",
  },
  {
    cod: "S366",
  },
  {
    cod: "S454",
  },
  {
    cod: "FORMOUT",
  },
  {
    cod: "SF154",
  },
  {
    cod: "FA390",
  },
  {
    cod: "FA031",
  },
  {
    cod: "FA032",
  },
  {
    cod: "FA085",
  },
  {
    cod: "FA086",
  },
  {
    cod: "FA108",
  },
  {
    cod: "FA191",
  },
  {
    cod: "FA304",
  },
  {
    cod: "GA37",
  },
  {
    cod: "FA188",
  },
  {
    cod: "FA340",
  },
  {
    cod: "FA073",
  },
  {
    cod: "GA44",
  },
  {
    cod: "FA066",
  },
  {
    cod: "FA070",
  },
  {
    cod: "FA071",
  },
  {
    cod: "FA072",
  },
  {
    cod: "GA21",
  },
  {
    cod: "FA069",
  },
  {
    cod: "FA334",
  },
  {
    cod: "FA052",
  },
  {
    cod: "FA169",
  },
  {
    cod: "FA369",
  },
  {
    cod: "FA275",
  },
  {
    cod: "GA16",
  },
  {
    cod: "FA146",
  },
  {
    cod: "FA306",
  },
  {
    cod: "GA41",
  },
  {
    cod: "FA331",
  },
  {
    cod: "FA109",
  },
  {
    cod: "GA32",
  },
  {
    cod: "FA174",
  },
  {
    cod: "FA233",
  },
  {
    cod: "GA4",
  },
  {
    cod: "FA212",
  },
  {
    cod: "FA213",
  },
  {
    cod: "FA214",
  },
  {
    cod: "FA382",
  },
  {
    cod: "FA383",
  },
  {
    cod: "FA384",
  },
  {
    cod: "FA234",
  },
  {
    cod: "FA321",
  },
  {
    cod: "FA322",
  },
  {
    cod: "FA303",
  },
  {
    cod: "FA018",
  },
  {
    cod: "FA273",
  },
  {
    cod: "FA054",
  },
  {
    cod: "FA175",
  },
  {
    cod: "GA59",
  },
  {
    cod: "FA176",
  },
  {
    cod: "FA298",
  },
  {
    cod: "FA299",
  },
  {
    cod: "FH06",
  },
  {
    cod: "FA112",
  },
  {
    cod: "FA001",
  },
  {
    cod: "FH02",
  },
  {
    cod: "GA60",
  },
  {
    cod: "FA120",
  },
  {
    cod: "FA124",
  },
  {
    cod: "FA125",
  },
  {
    cod: "FA126",
  },
  {
    cod: "FA127",
  },
  {
    cod: "FA130",
  },
  {
    cod: "FA132",
  },
  {
    cod: "FA134",
  },
  {
    cod: "FA142",
  },
  {
    cod: "FA143",
  },
  {
    cod: "FA144",
  },
  {
    cod: "FA151",
  },
  {
    cod: "FA160",
  },
  {
    cod: "FA122",
  },
  {
    cod: "FA141",
  },
  {
    cod: "FA187",
  },
  {
    cod: "FA192",
  },
  {
    cod: "FA285",
  },
  {
    cod: "GA50",
  },
  {
    cod: "FA254",
  },
  {
    cod: "GA23",
  },
  {
    cod: "FA193",
  },
  {
    cod: "FA211",
  },
  {
    cod: "FA090",
  },
  {
    cod: "FA380",
  },
  {
    cod: "GA51",
  },
  {
    cod: "FA284",
  },
  {
    cod: "FA262",
  },
  {
    cod: "FA007",
  },
  {
    cod: "FA003",
  },
  {
    cod: "GA5",
  },
  {
    cod: "FA204",
  },
  {
    cod: "FA258",
  },
  {
    cod: "FA368",
  },
  {
    cod: "FA367",
  },
  {
    cod: "GA35",
  },
  {
    cod: "FA332",
  },
  {
    cod: "FA039",
  },
  {
    cod: "FA037",
  },
  {
    cod: "FA038",
  },
  {
    cod: "FA39-1",
  },
  {
    cod: "FA333",
  },
  {
    cod: "GA22",
  },
  {
    cod: "FA164",
  },
  {
    cod: "FA364",
  },
  {
    cod: "FA088",
  },
  {
    cod: "FA087",
  },
  {
    cod: "FA276",
  },
  {
    cod: "FA388",
  },
  {
    cod: "FA307",
  },
  {
    cod: "FA036",
  },
  {
    cod: "FA034",
  },
  {
    cod: "FA035",
  },
  {
    cod: "FA237",
  },
  {
    cod: "GA56",
  },
  {
    cod: "FA287",
  },
  {
    cod: "FA096",
  },
  {
    cod: "FA178",
  },
  {
    cod: "FA179",
  },
  {
    cod: "FA335",
  },
  {
    cod: "GA67",
  },
  {
    cod: "FA259",
  },
  {
    cod: "FA249",
  },
  {
    cod: "GA57",
  },
  {
    cod: "GA69",
  },
  {
    cod: "FA098",
  },
  {
    cod: "FA351",
  },
  {
    cod: "FA239",
  },
  {
    cod: "FA257",
  },
  {
    cod: "FA290",
  },
  {
    cod: "FA227",
  },
  {
    cod: "FA288",
  },
  {
    cod: "FA279",
  },
  {
    cod: "FA236",
  },
  {
    cod: "FA393",
  },
  {
    cod: "FA281",
  },
  {
    cod: "FH10",
  },
  {
    cod: "FH11",
  },
  {
    cod: "FA371",
  },
  {
    cod: "FA330",
  },
  {
    cod: "GA55",
  },
  {
    cod: "FA283",
  },
  {
    cod: "FA362",
  },
  {
    cod: "FA361",
  },
  {
    cod: "FA185",
  },
  {
    cod: "FA059",
  },
  {
    cod: "FA060",
  },
  {
    cod: "FA061",
  },
  {
    cod: "FA186",
  },
  {
    cod: "FA063",
  },
  {
    cod: "FA062",
  },
  {
    cod: "FA292",
  },
  {
    cod: "FA201",
  },
  {
    cod: "FA319",
  },
  {
    cod: "FA252",
  },
  {
    cod: "CAPI18",
  },
  {
    cod: "RJ018",
  },
  {
    cod: "LAMCOM91",
  },
  {
    cod: "R1",
  },
  {
    cod: "CAPI13",
  },
  {
    cod: "MR.3",
  },
  {
    cod: "LAMCOMFC",
  },
  {
    cod: "10020008",
  },
  {
    cod: "CA.113",
  },
  {
    cod: "LAMCOMFH1",
  },
  {
    cod: "LAMCOMFH2",
  },
  {
    cod: "LAMCOMFH3",
  },
  {
    cod: "LAMCOMFH4",
  },
  {
    cod: "LAMCOMFH5",
  },
  {
    cod: "LAMCOMFH6",
  },
  {
    cod: "MR.4",
  },
  {
    cod: "RJ012",
  },
  {
    cod: "S124",
  },
  {
    cod: "CA.114",
  },
  {
    cod: "AM044",
  },
  {
    cod: "R16",
  },
  {
    cod: "R19",
  },
  {
    cod: "MAPFLORCITAS",
  },
  {
    cod: "R14",
  },
  {
    cod: "FV9-12-03.02",
  },
  {
    cod: "MULTI-FLORES-1",
  },
  {
    cod: "JR504",
  },
  {
    cod: "LAMCOM.10",
  },
  {
    cod: "LAMCOM.11",
  },
  {
    cod: "LAMCOM.12",
  },
  {
    cod: "LAMCOM.13",
  },
  {
    cod: "LAMCOM.14",
  },
  {
    cod: "LAMCOM.15",
  },
  {
    cod: "LAMCOM.16",
  },
  {
    cod: "LAMCOM.17",
  },
  {
    cod: "LAMCOM.18",
  },
  {
    cod: "LAMCOM.50",
  },
  {
    cod: "LAMCOM.19",
  },
  {
    cod: "LANCOMF22",
  },
  {
    cod: "LAMCOM.20",
  },
  {
    cod: "LAMCOM.21",
  },
  {
    cod: "LAMCOM.52",
  },
  {
    cod: "LANCOMF26",
  },
  {
    cod: "LANCOMF27",
  },
  {
    cod: "LANCOMF28",
  },
  {
    cod: "LAMCOMF29",
  },
  {
    cod: "LAMCOM.22",
  },
  {
    cod: "LANCOMF30",
  },
  {
    cod: "LANCOMF31",
  },
  {
    cod: "LANCOMF32",
  },
  {
    cod: "LANCOMF33",
  },
  {
    cod: "LANCOMF34",
  },
  {
    cod: "LANCOMF36",
  },
  {
    cod: "LAMCOM.23",
  },
  {
    cod: "710-1490",
  },
  {
    cod: "LAMCOM.24",
  },
  {
    cod: "LAMCOMFLORES50",
  },
  {
    cod: "LAMCOM.25",
  },
  {
    cod: "LAMCOM.26",
  },
  {
    cod: "LAMCOM.27",
  },
  {
    cod: "LAMCOM.28",
  },
  {
    cod: "S111",
  },
  {
    cod: "SM842",
  },
  {
    cod: "710-1101",
  },
  {
    cod: "710-2215",
  },
  {
    cod: "SM840",
  },
  {
    cod: "710-1536",
  },
  {
    cod: "INN001",
  },
  {
    cod: "INN043",
  },
  {
    cod: "LAMCOMFVG",
  },
  {
    cod: "REP3507",
  },
  {
    cod: "SM838",
  },
  {
    cod: "4092530",
  },
  {
    cod: "S108",
  },
  {
    cod: "4176133",
  },
  {
    cod: "FLEESC.22",
  },
  {
    cod: "BOTI005B",
  },
  {
    cod: "BOTI004B",
  },
  {
    cod: "MAPFROZEN",
  },
  {
    cod: "COT4047",
  },
  {
    cod: "COT4028",
  },
  {
    cod: "COT4024",
  },
  {
    cod: "PASTE11",
  },
  {
    cod: "FLEESC.25",
  },
  {
    cod: "DELI2PUNTAFUC",
  },
  {
    cod: "DELIPASTX1F",
  },
  {
    cod: "GFUCSIA200",
  },
  {
    cod: "PUNZ2",
  },
  {
    cod: "504102",
  },
  {
    cod: "504101",
  },
  {
    cod: "TFFR",
  },
  {
    cod: "SM772",
  },
  {
    cod: "SF158",
  },
  {
    cod: "23598",
  },
  {
    cod: "1235",
  },
  {
    cod: "GELSSAB",
  },
  {
    cod: "CEN4500",
  },
  {
    cod: "GESTIONENVIOS",
  },
  {
    cod: "R9",
  },
  {
    cod: "R7",
  },
  {
    cod: "23001700",
  },
  {
    cod: "3260020",
  },
  {
    cod: "3260010",
  },
  {
    cod: "12164C",
  },
  {
    cod: "12164CE",
  },
  {
    cod: "12164G",
  },
  {
    cod: "12164L",
  },
  {
    cod: "12164N",
  },
  {
    cod: "12164R",
  },
  {
    cod: "12164V",
  },
  {
    cod: "3260050",
  },
  {
    cod: "3260060",
  },
  {
    cod: "32600500",
  },
  {
    cod: "PROGLUX170",
  },
  {
    cod: "CIRGLUX170",
  },
  {
    cod: "GSPARK",
  },
  {
    cod: "GXAN",
  },
  {
    cod: "GA83",
  },
  {
    cod: "CEN1615",
  },
  {
    cod: "GRG400M",
  },
  {
    cod: "CEN50GR",
  },
  {
    cod: "GAMARILLA",
  },
  {
    cod: "GRANAZUL",
  },
  {
    cod: "GRABLANCA",
  },
  {
    cod: "GCELESTE",
  },
  {
    cod: "GRANLILLA",
  },
  {
    cod: "GMULTIC",
  },
  {
    cod: "GRANA400N",
  },
  {
    cod: "ROJA400",
  },
  {
    cod: "GRANAROJ",
  },
  {
    cod: "GRANAROS",
  },
  {
    cod: "GRANAVERD",
  },
  {
    cod: "DELIPRIMX1G",
  },
  {
    cod: "CENAMA",
  },
  {
    cod: "CEN1509",
  },
  {
    cod: "CENAZU",
  },
  {
    cod: "CEN1424",
  },
  {
    cod: "CENBCA",
  },
  {
    cod: "CEN1448",
  },
  {
    cod: "CENCELE",
  },
  {
    cod: "CEN1479",
  },
  {
    cod: "CENMARRON",
  },
  {
    cod: "CEN1417",
  },
  {
    cod: "CENMULTI",
  },
  {
    cod: "CENNARA",
  },
  {
    cod: "CEN150GR",
  },
  {
    cod: "CENROJO",
  },
  {
    cod: "CEN1455",
  },
  {
    cod: "CENROSA",
  },
  {
    cod: "CEN1431",
  },
  {
    cod: "KINGGR",
  },
  {
    cod: "FPET.81",
  },
  {
    cod: "FLECOLPET.82",
  },
  {
    cod: "KINGGRIS",
  },
  {
    cod: "SIL09",
  },
  {
    cod: "S643",
  },
  {
    cod: "S629",
  },
  {
    cod: "S644",
  },
  {
    cod: "S654",
  },
  {
    cod: "VI040",
  },
  {
    cod: "NJ012",
  },
  {
    cod: "S615",
  },
  {
    cod: "AM036",
  },
  {
    cod: "NJ046",
  },
  {
    cod: "AM035",
  },
  {
    cod: "NJ029",
  },
  {
    cod: "NJ045",
  },
  {
    cod: "SIL53",
  },
  {
    cod: "CHINPL3",
  },
  {
    cod: "CHINPL4",
  },
  {
    cod: "CHINPL5",
  },
  {
    cod: "CHINT16C7",
  },
  {
    cod: "CHINT16C72",
  },
  {
    cod: "CHINT16C",
  },
  {
    cod: "FLEESC.26",
  },
  {
    cod: "COT4071",
  },
  {
    cod: "SM801",
  },
  {
    cod: "HH125",
  },
  {
    cod: "AZ050",
  },
  {
    cod: "S128",
  },
  {
    cod: "MG1",
  },
  {
    cod: "S127",
  },
  {
    cod: "CA.112",
  },
  {
    cod: "CA.111",
  },
  {
    cod: "CHINTHOJAS1",
  },
  {
    cod: "MG3",
  },
  {
    cod: "INN508",
  },
  {
    cod: "CA.110",
  },
  {
    cod: "7107283",
  },
  {
    cod: "CA.109",
  },
  {
    cod: "S118",
  },
  {
    cod: "3294330",
  },
  {
    cod: "WILTONDEC",
  },
  {
    cod: "LAMCOM.49",
  },
  {
    cod: "LAMCOM.29",
  },
  {
    cod: "AZ002",
  },
  {
    cod: "SPF10",
  },
  {
    cod: "HUEPASC10",
  },
  {
    cod: "H3",
  },
  {
    cod: "H4",
  },
  {
    cod: "H6",
  },
  {
    cod: "LAMCOMH2",
  },
  {
    cod: "LAMCOMH3",
  },
  {
    cod: "LAMCOMH4",
  },
  {
    cod: "LAMCOMH5",
  },
  {
    cod: "LAMCOMH6",
  },
  {
    cod: "80249",
  },
  {
    cod: "FLEESC.27",
  },
  {
    cod: "TRANSFER",
  },
  {
    cod: "JAL22",
  },
  {
    cod: "109346B",
  },
  {
    cod: "AM007",
  },
  {
    cod: "AM005",
  },
  {
    cod: "FLEESC.28",
  },
  {
    cod: "JRPIL",
  },
  {
    cod: "JRPILLOW",
  },
  {
    cod: "HGB49",
  },
  {
    cod: "CHINT1847",
  },
  {
    cod: "FLEESC.101",
  },
  {
    cod: "CHIN2692",
  },
  {
    cod: "GMC174",
  },
  {
    cod: "RLG",
  },
  {
    cod: "8030",
  },
  {
    cod: "7004",
  },
  {
    cod: "710-0235",
  },
  {
    cod: "SPICE",
  },
  {
    cod: "415-9668",
  },
  {
    cod: "LE",
  },
  {
    cod: "LADRILLITOS",
  },
  {
    cod: "7795522",
  },
  {
    cod: "PALLENTAMAX0.5",
  },
  {
    cod: "PALLENTAZX0.5",
  },
  {
    cod: "PALLENTBLX0.5",
  },
  {
    cod: "PALLENTCELX0.5",
  },
  {
    cod: "ROCKLENCHOX1",
  },
  {
    cod: "PALLENTNAX0.5",
  },
  {
    cod: "PALLENTROX0.5",
  },
  {
    cod: "PALLENTROSX0.5",
  },
  {
    cod: "PALLENTVERX0.5",
  },
  {
    cod: "PALLENTVIOX0.5",
  },
  {
    cod: "PALLENTMIAMAX0.",
  },
  {
    cod: "PALLENTMIAZX0.5",
  },
  {
    cod: "PALLENTMIBLX0.5",
  },
  {
    cod: "PALLENTMIROX0.5",
  },
  {
    cod: "PALLENTMIROSX0.",
  },
  {
    cod: "PALLENTMIVERX0.",
  },
  {
    cod: "PALLENTMIVIOX0.",
  },
  {
    cod: "COT4823",
  },
  {
    cod: "COT4825",
  },
  {
    cod: "COT4824",
  },
  {
    cod: "COT4820",
  },
  {
    cod: "COT4821",
  },
  {
    cod: "COT4822",
  },
  {
    cod: "COT8069",
  },
  {
    cod: "AF201002",
  },
  {
    cod: "WILSEQUINS",
  },
  {
    cod: "REP2005",
  },
  {
    cod: "FPET.05",
  },
  {
    cod: "POLVOLILA",
  },
  {
    cod: "D032",
  },
  {
    cod: "FLEESC.29",
  },
  {
    cod: "SM723",
  },
  {
    cod: "SIL51",
  },
  {
    cod: "R10",
  },
  {
    cod: "SF026",
  },
  {
    cod: "COT4063",
  },
  {
    cod: "COT4075",
  },
  {
    cod: "S452",
  },
  {
    cod: "COT4067",
  },
  {
    cod: "S3111",
  },
  {
    cod: "BOTI025.B",
  },
  {
    cod: "LAMCOM.51",
  },
  {
    cod: "AZ021",
  },
  {
    cod: "CROSA31",
  },
  {
    cod: "LS1001",
  },
  {
    cod: "LS1003",
  },
  {
    cod: "LS0153",
  },
  {
    cod: "LS0139",
  },
  {
    cod: "INN050",
  },
  {
    cod: "R2",
  },
  {
    cod: "WIL050",
  },
  {
    cod: "FLIPO.66",
  },
  {
    cod: "FLEMAG",
  },
  {
    cod: "COT4025",
  },
  {
    cod: "COT4022",
  },
  {
    cod: "MBUFFYCHO",
  },
  {
    cod: "MBUFFYLIM",
  },
  {
    cod: "MALVABUFFYFRESA",
  },
  {
    cod: "BUFFYVIOL",
  },
  {
    cod: "95484",
  },
  {
    cod: "INN506",
  },
  {
    cod: "INN010",
  },
  {
    cod: "NJ001",
  },
  {
    cod: "LAMCOM.30",
  },
  {
    cod: "FLEESC.31",
  },
  {
    cod: "RP5190",
  },
  {
    cod: "RP5191",
  },
  {
    cod: "RP5192",
  },
  {
    cod: "FV9-14-08",
  },
  {
    cod: "FV9-14-10",
  },
  {
    cod: "MCY0",
  },
  {
    cod: "MCY1",
  },
  {
    cod: "MCY2",
  },
  {
    cod: "MCY3",
  },
  {
    cod: "MCY4",
  },
  {
    cod: "MCY5",
  },
  {
    cod: "MCY6",
  },
  {
    cod: "MBN2",
  },
  {
    cod: "MBN3",
  },
  {
    cod: "CHINT2375",
  },
  {
    cod: "CA.02",
  },
  {
    cod: "REP5010",
  },
  {
    cod: "M2C",
  },
  {
    cod: "M3C",
  },
  {
    cod: "M4C",
  },
  {
    cod: "AF106003",
  },
  {
    cod: "BALLMANICROCX1",
  },
  {
    cod: "ARGMANICROCX1",
  },
  {
    cod: "BALLMANIFILX0.8",
  },
  {
    cod: "MANO MICKEY",
  },
  {
    cod: "FLEESC.32",
  },
  {
    cod: "9417",
  },
  {
    cod: "9415",
  },
  {
    cod: "9416",
  },
  {
    cod: "MAPSA56-50",
  },
  {
    cod: "MAPSA53-80",
  },
  {
    cod: "MAQUILLAJE",
  },
  {
    cod: "WIL083",
  },
  {
    cod: "CHINT1413",
  },
  {
    cod: "SIL10",
  },
  {
    cod: "SIL21",
  },
  {
    cod: "609-1192",
  },
  {
    cod: "NJ027",
  },
  {
    cod: "S317",
  },
  {
    cod: "S3103",
  },
  {
    cod: "S3102",
  },
  {
    cod: "S3110",
  },
  {
    cod: "R5",
  },
  {
    cod: "SIL39",
  },
  {
    cod: "REPPAL06",
  },
  {
    cod: "AZ047",
  },
  {
    cod: "RJ021",
  },
  {
    cod: "VI027",
  },
  {
    cod: "REP5038",
  },
  {
    cod: "SIL40",
  },
  {
    cod: "200517",
  },
  {
    cod: "417-2591",
  },
  {
    cod: "INN507",
  },
  {
    cod: "FLEESC 102",
  },
  {
    cod: "DELIPASTX1M",
  },
  {
    cod: "FPET.85",
  },
  {
    cod: "FPET.58",
  },
  {
    cod: "T02",
  },
  {
    cod: "MERCADOENVIOS",
  },
  {
    cod: "MICKEY Y VS.",
  },
  {
    cod: "CA584",
  },
  {
    cod: "ARGMICGALLBLXQ",
  },
  {
    cod: "ARGMICGALLXQ",
  },
  {
    cod: "W710773",
  },
  {
    cod: "FLEESC.35",
  },
  {
    cod: "RM",
  },
  {
    cod: "CUCU",
  },
  {
    cod: "MULTIPERLAS1",
  },
  {
    cod: "CARAPAL",
  },
  {
    cod: "PALLENTMINAX0.5",
  },
  {
    cod: "PALLENTNAX250",
  },
  {
    cod: "PALLENTNAX250",
  },
  {
    cod: "S3155",
  },
  {
    cod: "S664",
  },
  {
    cod: "MMACORAZON",
  },
  {
    cod: "MMAESTRELLA",
  },
  {
    cod: "MMAREDONDO",
  },
  {
    cod: "S3143",
  },
  {
    cod: "10022715",
  },
  {
    cod: "10022712",
  },
  {
    cod: "SF168",
  },
  {
    cod: "TORTAS",
  },
  {
    cod: "MINNIE",
  },
  {
    cod: "DROPSMIXACQUAPE",
  },
  {
    cod: "PRB15A",
  },
  {
    cod: "DROPSMIXCELESTE",
  },
  {
    cod: "POA33A",
  },
  {
    cod: "SIL34",
  },
  {
    cod: "CEN7932",
  },
  {
    cod: "DROPSMIXLILAPER",
  },
  {
    cod: "DROPSMIXNEGROPE",
  },
  {
    cod: "DROPSMIXPLATEAD",
  },
  {
    cod: "DROPSMIXROSAPER",
  },
  {
    cod: "POC40",
  },
  {
    cod: "CUP17",
  },
  {
    cod: "CUP18",
  },
  {
    cod: "PS12",
  },
  {
    cod: "PS15",
  },
  {
    cod: "PS16",
  },
  {
    cod: "PS20",
  },
  {
    cod: "PS22",
  },
  {
    cod: "PS29",
  },
  {
    cod: "PS31",
  },
  {
    cod: "PS33",
  },
  {
    cod: "REP4604",
  },
  {
    cod: "PCHUPE",
  },
  {
    cod: "SFT303",
  },
  {
    cod: "REP3001",
  },
  {
    cod: "2115-0030",
  },
  {
    cod: "PS01",
  },
  {
    cod: "PS02",
  },
  {
    cod: "PS03",
  },
  {
    cod: "PS04",
  },
  {
    cod: "PS09",
  },
  {
    cod: "PS10",
  },
  {
    cod: "PS11",
  },
  {
    cod: "PS13",
  },
  {
    cod: "PS14",
  },
  {
    cod: "PS18",
  },
  {
    cod: "PS21",
  },
  {
    cod: "PS08",
  },
  {
    cod: "PS05",
  },
  {
    cod: "PS06",
  },
  {
    cod: "PS07",
  },
  {
    cod: "FLANFLOR - 3294",
  },
  {
    cod: "119228",
  },
  {
    cod: "S126",
  },
  {
    cod: "MUFCORAN",
  },
  {
    cod: "REPANT04",
  },
  {
    cod: "S125",
  },
  {
    cod: "PANDULCE1000F",
  },
  {
    cod: "PANDULCE1000FG",
  },
  {
    cod: "PANDULCE1000",
  },
  {
    cod: "PANDULCE1000VC",
  },
  {
    cod: "PANDULCE1000.2",
  },
  {
    cod: "PANDULCE100F",
  },
  {
    cod: "PANDULCE100PN",
  },
  {
    cod: "PANDULCE100VC",
  },
  {
    cod: "PANDULCE100",
  },
  {
    cod: "PANDULCE250F",
  },
  {
    cod: "PANDULCE250FG",
  },
  {
    cod: "PANDULCE250PN",
  },
  {
    cod: "PANDULCE250VC",
  },
  {
    cod: "PANDULCE250",
  },
  {
    cod: "PANDULCE500FG",
  },
  {
    cod: "PANDULCE500",
  },
  {
    cod: "PANDULCE500VC",
  },
  {
    cod: "PANDULCE500.2",
  },
  {
    cod: "4K15",
  },
  {
    cod: "CHINTMRT",
  },
  {
    cod: "AX2059",
  },
  {
    cod: "MOLROSA",
  },
  {
    cod: "REP4553",
  },
  {
    cod: "ALU1211",
  },
  {
    cod: "ALU1411",
  },
  {
    cod: "ALU1611",
  },
  {
    cod: "ALU2211",
  },
  {
    cod: "ALU123",
  },
  {
    cod: "ALU163",
  },
  {
    cod: "ALU183",
  },
  {
    cod: "ALU203",
  },
  {
    cod: "ALU223",
  },
  {
    cod: "ALU243",
  },
  {
    cod: "ALU143",
  },
  {
    cod: "MBM0006",
  },
  {
    cod: "METBU",
  },
  {
    cod: "MBM0001",
  },
  {
    cod: "MBM0002",
  },
  {
    cod: "MBM0003",
  },
  {
    cod: "MBM0004",
  },
  {
    cod: "MBM0005",
  },
  {
    cod: "MBM0007",
  },
  {
    cod: "S623",
  },
  {
    cod: "S609",
  },
  {
    cod: "S649",
  },
  {
    cod: "S622",
  },
  {
    cod: "S611",
  },
  {
    cod: "S647",
  },
  {
    cod: "S648",
  },
  {
    cod: "MULTI-MOLDURITA",
  },
  {
    cod: "S638",
  },
  {
    cod: "S625",
  },
  {
    cod: "SM805",
  },
  {
    cod: "SIL52",
  },
  {
    cod: "710-0230",
  },
  {
    cod: "S341",
  },
  {
    cod: "MULTI-MOÑOS-1",
  },
  {
    cod: "S361",
  },
  {
    cod: "PTR004",
  },
  {
    cod: "710-0229",
  },
  {
    cod: "LAMCOM.31",
  },
  {
    cod: "CAPI19",
  },
  {
    cod: "LAMCOM.43",
  },
  {
    cod: "POM40A",
  },
  {
    cod: "POM40",
  },
  {
    cod: "POM42",
  },
  {
    cod: "POM43",
  },
  {
    cod: "710-0119",
  },
  {
    cod: "LAMCOM.69",
  },
  {
    cod: "MOLDECHONAV",
  },
  {
    cod: "INN516",
  },
  {
    cod: "FLIPO.07",
  },
  {
    cod: "FPETF.NA",
  },
  {
    cod: "FPET.86",
  },
  {
    cod: "DELIPRIMX1NJ",
  },
  {
    cod: "KINGNNAR",
  },
  {
    cod: "WIL062.6",
  },
  {
    cod: "FPET.87",
  },
  {
    cod: "FPET.88",
  },
  {
    cod: "NEONNARA",
  },
  {
    cod: "DELI2PUNTANAR",
  },
  {
    cod: "FPET.74",
  },
  {
    cod: "LAMCOMNAVIDAD",
  },
  {
    cod: "LAMCOMNAV1",
  },
  {
    cod: "LAMCOMNAV10",
  },
  {
    cod: "LAMCOMNAV11",
  },
  {
    cod: "LAMCOMNAV12",
  },
  {
    cod: "LAMCOMNAV13",
  },
  {
    cod: "LAMCOMNAV14",
  },
  {
    cod: "LAMCOMNAV2",
  },
  {
    cod: "LAMCOMNAV3",
  },
  {
    cod: "LAMCOMNAV4",
  },
  {
    cod: "LAMCOMNAV5",
  },
  {
    cod: "LAMCOMNAV6",
  },
  {
    cod: "LAMCOMNAV7",
  },
  {
    cod: "LAMCOMNAV8",
  },
  {
    cod: "LAMCOMNAV9",
  },
  {
    cod: "MTNAVD",
  },
  {
    cod: "MTNAVP",
  },
  {
    cod: "FLIPO.09",
  },
  {
    cod: "PASTE737",
  },
  {
    cod: "PASTE150",
  },
  {
    cod: "WIL073.5",
  },
  {
    cod: "WIL062.7",
  },
  {
    cod: "MC-DF-0003/1",
  },
  {
    cod: "FPET.89",
  },
  {
    cod: "COT4079",
  },
  {
    cod: "VI035",
  },
  {
    cod: "MR.7",
  },
  {
    cod: "7107290",
  },
  {
    cod: "CLOUD",
  },
  {
    cod: "NBPX20",
  },
  {
    cod: "CEN7123",
  },
  {
    cod: "FLES37",
  },
  {
    cod: "CHINT1629",
  },
  {
    cod: "CHINT1636",
  },
  {
    cod: "CHINT1650",
  },
  {
    cod: "CHINT1667",
  },
  {
    cod: "CHINT1612",
  },
  {
    cod: "CHINT1643",
  },
  {
    cod: "CHINT1681",
  },
  {
    cod: "CHINT1698",
  },
  {
    cod: "NUMERO",
  },
  {
    cod: "PS24",
  },
  {
    cod: "INN513",
  },
  {
    cod: "LD012",
  },
  {
    cod: "OREOMDE",
  },
  {
    cod: "KINGFORO",
  },
  {
    cod: "SIL08",
  },
  {
    cod: "R21",
  },
  {
    cod: "OUTDEC106",
  },
  {
    cod: "OUTCHINTMCH6",
  },
  {
    cod: "OUTDEC104",
  },
  {
    cod: "OUTBASEN",
  },
  {
    cod: "OUT7896",
  },
  {
    cod: "OUTCHINT2530",
  },
  {
    cod: "OUTAX02330",
  },
  {
    cod: "VC7535OUT",
  },
  {
    cod: "OUTCH1",
  },
  {
    cod: "OUTESPCH",
  },
  {
    cod: "OUTREP4659",
  },
  {
    cod: "OUT4176129",
  },
  {
    cod: "OUTJARRA",
  },
  {
    cod: "OUTCHINTLT25",
  },
  {
    cod: "OUTTOR0134",
  },
  {
    cod: "OUTTOR0131",
  },
  {
    cod: "OUTTOR0132",
  },
  {
    cod: "OUTTOR0133",
  },
  {
    cod: "OUTCHONAV",
  },
  {
    cod: "OUTLETPALO",
  },
  {
    cod: "OUTLETPALO33",
  },
  {
    cod: "OUTPINCELCH",
  },
  {
    cod: "PINCELOUT",
  },
  {
    cod: "OUTLETPLACA",
  },
  {
    cod: "OUTPION5",
  },
  {
    cod: "OUTPION6",
  },
  {
    cod: "GPOUTLET",
  },
  {
    cod: "OUTLERSCRAP",
  },
  {
    cod: "OUTCHIN1534",
  },
  {
    cod: "OUTTAMIZSET",
  },
  {
    cod: "OUTTAMIZ",
  },
  {
    cod: "OUTAX7200",
  },
  {
    cod: "OUTCHINT4125",
  },
  {
    cod: "OUTAX5004",
  },
  {
    cod: "OUTCA.10",
  },
  {
    cod: "OUTHOJ26X10",
  },
  {
    cod: "OUTHOJACUA26X10",
  },
  {
    cod: "OUTHOJAREN28X10",
  },
  {
    cod: "OUTCHINTMCH3",
  },
  {
    cod: "STENCILP",
  },
  {
    cod: "7107291",
  },
  {
    cod: "LAMCOM.32",
  },
  {
    cod: "VI034",
  },
  {
    cod: "AM22898",
  },
  {
    cod: "CP20GP",
  },
  {
    cod: "CHOOK250GR",
  },
  {
    cod: "OUTLET",
  },
  {
    cod: "BOTI009",
  },
  {
    cod: "BOTI010",
  },
  {
    cod: "BOTI011",
  },
  {
    cod: "1907-1088",
  },
  {
    cod: "PAPELALUM25X5",
  },
  {
    cod: "PAPELARROZLISO",
  },
  {
    cod: "BOMBDORD",
  },
  {
    cod: "BOMBLUN",
  },
  {
    cod: "35607",
  },
  {
    cod: "BOMBFUCS",
  },
  {
    cod: "35997",
  },
  {
    cod: "26896",
  },
  {
    cod: "35615",
  },
  {
    cod: "PBROJO",
  },
  {
    cod: "689AP",
  },
  {
    cod: "BOMBAROS",
  },
  {
    cod: "BOMBAVIO",
  },
  {
    cod: "BOMBBD",
  },
  {
    cod: "BOMBMAC",
  },
  {
    cod: "BOMBLILA",
  },
  {
    cod: "BOMBMA",
  },
  {
    cod: "BOMBMAD",
  },
  {
    cod: "689M",
  },
  {
    cod: "BOMBNAR",
  },
  {
    cod: "689RR",
  },
  {
    cod: "689RRM",
  },
  {
    cod: "PBOMT",
  },
  {
    cod: "BOMBVE",
  },
  {
    cod: "3DPR",
  },
  {
    cod: "PAR15",
  },
  {
    cod: "PAR17",
  },
  {
    cod: "PAR19",
  },
  {
    cod: "PAR21",
  },
  {
    cod: "PAR23",
  },
  {
    cod: "PAR25",
  },
  {
    cod: "GAN15",
  },
  {
    cod: "GAN17",
  },
  {
    cod: "GAN19",
  },
  {
    cod: "GAN21",
  },
  {
    cod: "GAN23",
  },
  {
    cod: "GAN25",
  },
  {
    cod: "GAN27",
  },
  {
    cod: "LAMCOM.33",
  },
  {
    cod: "LAMCOM.34",
  },
  {
    cod: "LAMCOM.35",
  },
  {
    cod: "AM019",
  },
  {
    cod: "AZ048",
  },
  {
    cod: "PA DECOR 28",
  },
  {
    cod: "PA DECOR 27",
  },
  {
    cod: "PA DECOR 08",
  },
  {
    cod: "PA DECOR 03",
  },
  {
    cod: "PA DECOR 30K",
  },
  {
    cod: "PA DECOR 19",
  },
  {
    cod: "PA DECOR 20",
  },
  {
    cod: "PA DECOR 29",
  },
  {
    cod: "PA DECOR 32V",
  },
  {
    cod: "CARX1.5",
  },
  {
    cod: "CARX3",
  },
  {
    cod: "CARX0.5",
  },
  {
    cod: "CARX0.75",
  },
  {
    cod: "PEPYPAN",
  },
  {
    cod: "PG DECOR 06",
  },
  {
    cod: "PG DECOR 05",
  },
  {
    cod: "PG DECOR 15",
  },
  {
    cod: "BAGOMX0.5N",
  },
  {
    cod: "PG DECOR 07",
  },
  {
    cod: "BAGOMX0.5R",
  },
  {
    cod: "PG DECOR 08",
  },
  {
    cod: "PG DECOR 16",
  },
  {
    cod: "PAS40P",
  },
  {
    cod: "PAS30P",
  },
  {
    cod: "BAMAZAX0.5",
  },
  {
    cod: "BALLCHOX0.75",
  },
  {
    cod: "BALLIFORMH",
  },
  {
    cod: "BALLVAIX0.75",
  },
  {
    cod: "MAPRELLALM59-09",
  },
  {
    cod: "MAPRELLAVE59-16",
  },
  {
    cod: "MAPRELLBAN59-07",
  },
  {
    cod: "MAPRELLCHOC59-1",
  },
  {
    cod: "MAPRELLFRU59-12",
  },
  {
    cod: "MAPRELLLIM59-08",
  },
  {
    cod: "MAPRELLMANI59-1",
  },
  {
    cod: "MAPRELLMEN59-15",
  },
  {
    cod: "MAPRELLTIRA59-1",
  },
  {
    cod: "10481",
  },
  {
    cod: "WIL051",
  },
  {
    cod: "PTR013",
  },
  {
    cod: "PTR001",
  },
  {
    cod: "PTR002",
  },
  {
    cod: "LAMCOM.47",
  },
  {
    cod: "FLEESC.39",
  },
  {
    cod: "7105522",
  },
  {
    cod: "PERLAS X 3",
  },
  {
    cod: "S603",
  },
  {
    cod: "SIL15",
  },
  {
    cod: "S607",
  },
  {
    cod: "S602",
  },
  {
    cod: "WIL031",
  },
  {
    cod: "S601",
  },
  {
    cod: "710-2081",
  },
  {
    cod: "WIL028",
  },
  {
    cod: "WIL026",
  },
  {
    cod: "WIL027",
  },
  {
    cod: "WIL029",
  },
  {
    cod: "LAMCOM.44",
  },
  {
    cod: "SM701",
  },
  {
    cod: "PICOGLOBO",
  },
  {
    cod: "PICOGLOBO1",
  },
  {
    cod: "PICOGLOBO5",
  },
  {
    cod: "PICOGLOBO8",
  },
  {
    cod: "PR32",
  },
  {
    cod: "BR.70",
  },
  {
    cod: "BR.71",
  },
  {
    cod: "BR.73",
  },
  {
    cod: "BR.74",
  },
  {
    cod: "BR.76",
  },
  {
    cod: "BR.78",
  },
  {
    cod: "BR.80",
  },
  {
    cod: "BR.95",
  },
  {
    cod: "BR.96",
  },
  {
    cod: "BR.97",
  },
  {
    cod: "CHINT1489",
  },
  {
    cod: "S224",
  },
  {
    cod: "ESTAM",
  },
  {
    cod: "ESTAMR",
  },
  {
    cod: "SID24",
  },
  {
    cod: "LCR20",
  },
  {
    cod: "LCR",
  },
  {
    cod: "SIDR24",
  },
  {
    cod: "LG20",
  },
  {
    cod: "LG4524",
  },
  {
    cod: "LGR20",
  },
  {
    cod: "KIEVG",
  },
  {
    cod: "LGR",
  },
  {
    cod: "MK106F15",
  },
  {
    cod: "LC4524",
  },
  {
    cod: "LCRR",
  },
  {
    cod: "LGRO",
  },
  {
    cod: "LGR24",
  },
  {
    cod: "VE001",
  },
  {
    cod: "SIL41",
  },
  {
    cod: "LAMCOM.36",
  },
  {
    cod: "LAMCOM.37",
  },
  {
    cod: "LAMCOM.38",
  },
  {
    cod: "R12",
  },
  {
    cod: "FPET.07",
  },
  {
    cod: "8031",
  },
  {
    cod: "FPET.90",
  },
  {
    cod: "PIN10",
  },
  {
    cod: "PIN12",
  },
  {
    cod: "PINCEL",
  },
  {
    cod: "SFCHATO1",
  },
  {
    cod: "SFCHATO3",
  },
  {
    cod: "FALCONN6",
  },
  {
    cod: "FALCONN8",
  },
  {
    cod: "19071111",
  },
  {
    cod: "PINCELN12",
  },
  {
    cod: "SFRED0",
  },
  {
    cod: "SFRED3",
  },
  {
    cod: "SFRED5",
  },
  {
    cod: "TRANSPINCEL",
  },
  {
    cod: "LAMCOM.74",
  },
  {
    cod: "609-7275",
  },
  {
    cod: "PI0",
  },
  {
    cod: "PI1",
  },
  {
    cod: "PI2",
  },
  {
    cod: "PI3",
  },
  {
    cod: "PI4",
  },
  {
    cod: "PI5",
  },
  {
    cod: "PI6",
  },
  {
    cod: "PI7",
  },
  {
    cod: "PI8",
  },
  {
    cod: "PI9",
  },
  {
    cod: "SM810",
  },
  {
    cod: "PIR5009-8",
  },
  {
    cod: "PIR0266",
  },
  {
    cod: "P10.10.03",
  },
  {
    cod: "P12.10.04",
  },
  {
    cod: "P12.10.05",
  },
  {
    cod: "P12.10.06",
  },
  {
    cod: "P12.10.07",
  },
  {
    cod: "P14.10",
  },
  {
    cod: "PGORRO.10",
  },
  {
    cod: "P10.10.04",
  },
  {
    cod: "P10.10.02",
  },
  {
    cod: "P10.10.01",
  },
  {
    cod: "P23.10",
  },
  {
    cod: "P25.10",
  },
  {
    cod: "P40.10.02",
  },
  {
    cod: "P40.10.03",
  },
  {
    cod: "P40.10.01",
  },
  {
    cod: "P40.10.04",
  },
  {
    cod: "P40.10.05",
  },
  {
    cod: "P40.10.06",
  },
  {
    cod: "P44.10",
  },
  {
    cod: "P46.10",
  },
  {
    cod: "P59.10",
  },
  {
    cod: "P43.10",
  },
  {
    cod: "PIR0266.08",
  },
  {
    cod: "P12.08.03",
  },
  {
    cod: "P12.08.04",
  },
  {
    cod: "P12.08.05",
  },
  {
    cod: "P12.08.06",
  },
  {
    cod: "P12.08.07",
  },
  {
    cod: "P14.08",
  },
  {
    cod: "P10.08.04",
  },
  {
    cod: "P10.08.02",
  },
  {
    cod: "P10.08.01",
  },
  {
    cod: "P10.08.03",
  },
  {
    cod: "P23.08",
  },
  {
    cod: "P25.08",
  },
  {
    cod: "P40.08.02",
  },
  {
    cod: "P40.08.03",
  },
  {
    cod: "P40.08.01",
  },
  {
    cod: "P40.08.04",
  },
  {
    cod: "P40.08.05",
  },
  {
    cod: "P40.08.06",
  },
  {
    cod: "PISAMAPER",
  },
  {
    cod: "PISBCOPER",
  },
  {
    cod: "18128",
  },
  {
    cod: "18132",
  },
  {
    cod: "PISLILAPER",
  },
  {
    cod: "PISNEGPER",
  },
  {
    cod: "PISROSAPER",
  },
  {
    cod: "4092529",
  },
  {
    cod: "BOTI027B",
  },
  {
    cod: "6B10",
  },
  {
    cod: "106103A4",
  },
  {
    cod: "106103A3",
  },
  {
    cod: "2593",
  },
  {
    cod: "106103A1",
  },
  {
    cod: "SUGARPLACA",
  },
  {
    cod: "VC18009",
  },
  {
    cod: "BOTI007B",
  },
  {
    cod: "WIL041",
  },
  {
    cod: "WIL042",
  },
  {
    cod: "WIL039",
  },
  {
    cod: "4092548",
  },
  {
    cod: "PION4",
  },
  {
    cod: "PION5",
  },
  {
    cod: "PION6",
  },
  {
    cod: "PION7",
  },
  {
    cod: "237187594006",
  },
  {
    cod: "CA.39",
  },
  {
    cod: "CA.45.BM",
  },
  {
    cod: "4093188",
  },
  {
    cod: "4092558",
  },
  {
    cod: "4092552",
  },
  {
    cod: "4092565",
  },
  {
    cod: "4097726",
  },
  {
    cod: "409-3189",
  },
  {
    cod: "409-7724",
  },
  {
    cod: "43190",
  },
  {
    cod: "CAI1321",
  },
  {
    cod: "CHINTBCO1",
  },
  {
    cod: "CHINTENC1",
  },
  {
    cod: "CHINTENC2",
  },
  {
    cod: "WIL040",
  },
  {
    cod: "409-3186",
  },
  {
    cod: "4092563",
  },
  {
    cod: "TFG10",
  },
  {
    cod: "94208",
  },
  {
    cod: "LBI.11",
  },
  {
    cod: "LBI.14",
  },
  {
    cod: "SPX3",
  },
  {
    cod: "INN291",
  },
  {
    cod: "FAIRYPLATA",
  },
  {
    cod: "FLECOLPET.91",
  },
  {
    cod: "WIL073.1",
  },
  {
    cod: "4160525",
  },
  {
    cod: "4160525C",
  },
  {
    cod: "YIPLAGIRBLOQ",
  },
  {
    cod: "YIPLAGIRVOL",
  },
  {
    cod: "4160525R",
  },
  {
    cod: "VI048",
  },
  {
    cod: "LAMCOM.56",
  },
  {
    cod: "S320",
  },
  {
    cod: "ROJO5GR",
  },
  {
    cod: "SALMON5GR",
  },
  {
    cod: "703-211",
  },
  {
    cod: "PMI01",
  },
  {
    cod: "PMI01AX250F",
  },
  {
    cod: "CIRBIHORX1",
  },
  {
    cod: "FLEESC.40",
  },
  {
    cod: "3DPON",
  },
  {
    cod: "TOPPER",
  },
  {
    cod: "25218",
  },
  {
    cod: "25217",
  },
  {
    cod: "PRB11",
  },
  {
    cod: "PRB15",
  },
  {
    cod: "PBW01",
  },
  {
    cod: "PCK01",
  },
  {
    cod: "16753",
  },
  {
    cod: "16754",
  },
  {
    cod: "16750",
  },
  {
    cod: "SM788",
  },
  {
    cod: "PRODULX1",
  },
  {
    cod: "PROCOCOAMX1",
  },
  {
    cod: "PROCONPLAN2X1",
  },
  {
    cod: "PROCONPLAN3X1",
  },
  {
    cod: "KINGPTG",
  },
  {
    cod: "MR.9",
  },
  {
    cod: "R15",
  },
  {
    cod: "R8",
  },
  {
    cod: "FPET.08",
  },
  {
    cod: "FPET.09",
  },
  {
    cod: "WIL73.13",
  },
  {
    cod: "FLEESC.41",
  },
  {
    cod: "LAMCOM.75",
  },
  {
    cod: "R13",
  },
  {
    cod: "PUNZ7",
  },
  {
    cod: "PUNZ6",
  },
  {
    cod: "LAMCOM.39",
  },
  {
    cod: "LAMCOM.40",
  },
  {
    cod: "LAMCOM.48",
  },
  {
    cod: "INN512",
  },
  {
    cod: "LAMCOMRD",
  },
  {
    cod: "LAMCOM.70",
  },
  {
    cod: "LAMCOM24",
  },
  {
    cod: "LAMCOMR8",
  },
  {
    cod: "LAMCOMZ23",
  },
  {
    cod: "LAMCOMZ24",
  },
  {
    cod: "KINGRG",
  },
  {
    cod: "WIL070",
  },
  {
    cod: "REJILLARECT",
  },
  {
    cod: "R26X40",
  },
  {
    cod: "16755",
  },
  {
    cod: "VE022",
  },
  {
    cod: "LAMCOMRJ",
  },
  {
    cod: "LAMCOM.71",
  },
  {
    cod: "FLEESC.42",
  },
  {
    cod: "RMM",
  },
  {
    cod: "503225",
  },
  {
    cod: "RP10",
  },
  {
    cod: "RP3",
  },
  {
    cod: "RP4",
  },
  {
    cod: "RP7",
  },
  {
    cod: "RP9",
  },
  {
    cod: "R31",
  },
  {
    cod: "R32",
  },
  {
    cod: "R33",
  },
  {
    cod: "R34",
  },
  {
    cod: "R35",
  },
  {
    cod: "R36",
  },
  {
    cod: "R37",
  },
  {
    cod: "R38",
  },
  {
    cod: "R39",
  },
  {
    cod: "R40",
  },
  {
    cod: "R41",
  },
  {
    cod: "R42",
  },
  {
    cod: "R43",
  },
  {
    cod: "R44",
  },
  {
    cod: "R45",
  },
  {
    cod: "R46",
  },
  {
    cod: "R47",
  },
  {
    cod: "R48",
  },
  {
    cod: "R49",
  },
  {
    cod: "R50",
  },
  {
    cod: "R51",
  },
  {
    cod: "R52",
  },
  {
    cod: "R53",
  },
  {
    cod: "R54",
  },
  {
    cod: "REPROL01",
  },
  {
    cod: "REPROL03",
  },
  {
    cod: "RP15",
  },
  {
    cod: "RP12",
  },
  {
    cod: "RP16",
  },
  {
    cod: "RP17",
  },
  {
    cod: "RP18",
  },
  {
    cod: "RP19",
  },
  {
    cod: "RP33",
  },
  {
    cod: "RP34",
  },
  {
    cod: "RP5",
  },
  {
    cod: "RP6",
  },
  {
    cod: "RP8",
  },
  {
    cod: "RP14",
  },
  {
    cod: "RP11",
  },
  {
    cod: "1907-1358",
  },
  {
    cod: "WIL102",
  },
  {
    cod: "FLIPO.03",
  },
  {
    cod: "FPETF.RO",
  },
  {
    cod: "LIPOROJO",
  },
  {
    cod: "PASTE751",
  },
  {
    cod: "PASTE110",
  },
  {
    cod: "PASTE116",
  },
  {
    cod: "DELI2PUNTAR",
  },
  {
    cod: "DELIPRIMX1R",
  },
  {
    cod: "WIL062.10",
  },
  {
    cod: "D022",
  },
  {
    cod: "FPET.93",
  },
  {
    cod: "DRUBI",
  },
  {
    cod: "WIL73.11",
  },
  {
    cod: "CAPI10",
  },
  {
    cod: "CAPI9",
  },
  {
    cod: "CAPI6",
  },
  {
    cod: "R11",
  },
  {
    cod: "CHIN2377",
  },
  {
    cod: "GMC154",
  },
  {
    cod: "FLIPO.04",
  },
  {
    cod: "FPETF.ROSA",
  },
  {
    cod: "PASTE130",
  },
  {
    cod: "PASTE108",
  },
  {
    cod: "DELIPASTX1R",
  },
  {
    cod: "KINGNROSA",
  },
  {
    cod: "WIL073.8",
  },
  {
    cod: "WIL062.9",
  },
  {
    cod: "FPET.12",
  },
  {
    cod: "PASTE119",
  },
  {
    cod: "FPET.51",
  },
  {
    cod: "DELI2PUNTAROSA",
  },
  {
    cod: "FPET.52",
  },
  {
    cod: "FPET.53",
  },
  {
    cod: "ROSA G",
  },
  {
    cod: "10021015",
  },
  {
    cod: "10021012",
  },
  {
    cod: "D009",
  },
  {
    cod: "10020715",
  },
  {
    cod: "DBRP24",
  },
  {
    cod: "DBRP26",
  },
  {
    cod: "DBRP30",
  },
  {
    cod: "PUNZ4",
  },
  {
    cod: "PUNZ10",
  },
  {
    cod: "FAIRYRV",
  },
  {
    cod: "R20",
  },
  {
    cod: "REPPAL05",
  },
  {
    cod: "S123",
  },
  {
    cod: "S113",
  },
  {
    cod: "CHINTRM1",
  },
  {
    cod: "S112",
  },
  {
    cod: "S122",
  },
  {
    cod: "S102",
  },
  {
    cod: "S114",
  },
  {
    cod: "S121",
  },
  {
    cod: "SIL33",
  },
  {
    cod: "S231",
  },
  {
    cod: "S451",
  },
  {
    cod: "S230",
  },
  {
    cod: "S240",
  },
  {
    cod: "S228",
  },
  {
    cod: "STENCILRP",
  },
  {
    cod: "R6",
  },
  {
    cod: "STENCILRW",
  },
  {
    cod: "STENCILSA",
  },
  {
    cod: "SA150",
  },
  {
    cod: "SF061",
  },
  {
    cod: "BOTI014B",
  },
  {
    cod: "COT4076",
  },
  {
    cod: "T11",
  },
  {
    cod: "COT4032",
  },
  {
    cod: "COT4080",
  },
  {
    cod: "STENCILSB",
  },
  {
    cod: "STENCILSC",
  },
  {
    cod: "BOTI018B",
  },
  {
    cod: "SCRARECTO",
  },
  {
    cod: "S6255",
  },
  {
    cod: "S6257",
  },
  {
    cod: "S6252",
  },
  {
    cod: "SP17",
  },
  {
    cod: "S6254",
  },
  {
    cod: "S6253",
  },
  {
    cod: "AZ040",
  },
  {
    cod: "S48",
  },
  {
    cod: "BOTI003B",
  },
  {
    cod: "SF049",
  },
  {
    cod: "SSRAY",
  },
  {
    cod: "STENCILSET",
  },
  {
    cod: "SETCORNET",
  },
  {
    cod: "SET01",
  },
  {
    cod: "SET02",
  },
  {
    cod: "S651",
  },
  {
    cod: "REP5049",
  },
  {
    cod: "AX-M5GA",
  },
  {
    cod: "AX1011",
  },
  {
    cod: "SETTJ",
  },
  {
    cod: "S449",
  },
  {
    cod: "STENCILSG",
  },
  {
    cod: "SG8",
  },
  {
    cod: "STENCILSGP",
  },
  {
    cod: "KINGSS",
  },
  {
    cod: "LAMCOMS1",
  },
  {
    cod: "SK187",
  },
  {
    cod: "SK189",
  },
  {
    cod: "SK61",
  },
  {
    cod: "SK188",
  },
  {
    cod: "STENCILSK",
  },
  {
    cod: "SK186",
  },
  {
    cod: "SK184",
  },
  {
    cod: "SK138",
  },
  {
    cod: "SK185",
  },
  {
    cod: "SK170",
  },
  {
    cod: "SK136",
  },
  {
    cod: "SK190",
  },
  {
    cod: "SRPX2",
  },
  {
    cod: "STENCILSN",
  },
  {
    cod: "MULTISOGA",
  },
  {
    cod: "GA9",
  },
  {
    cod: "41774",
  },
  {
    cod: "SORBENEGRO",
  },
  {
    cod: "7109979",
  },
  {
    cod: "MAPABC",
  },
  {
    cod: "PASTENAV",
  },
  {
    cod: "7101129",
  },
  {
    cod: "STENCILSR",
  },
  {
    cod: "STENCILST",
  },
  {
    cod: "ABC6",
  },
  {
    cod: "ABC11",
  },
  {
    cod: "ABC4",
  },
  {
    cod: "RL24",
  },
  {
    cod: "RL27",
  },
  {
    cod: "SW202",
  },
  {
    cod: "SET27",
  },
  {
    cod: "SW185",
  },
  {
    cod: "SET35",
  },
  {
    cod: "SW136",
  },
  {
    cod: "SK227",
  },
  {
    cod: "SK53",
  },
  {
    cod: "SET30",
  },
  {
    cod: "STENCIL",
  },
  {
    cod: "ABC2.5CM6",
  },
  {
    cod: "ABC3CM11",
  },
  {
    cod: "ABC3CM4",
  },
  {
    cod: "SETSTEN.21",
  },
  {
    cod: "SGP107",
  },
  {
    cod: "SW27",
  },
  {
    cod: "SGP30",
  },
  {
    cod: "SW116",
  },
  {
    cod: "SK105",
  },
  {
    cod: "SK36",
  },
  {
    cod: "SK146",
  },
  {
    cod: "SN11",
  },
  {
    cod: "SR29",
  },
  {
    cod: "SET8",
  },
  {
    cod: "SA203",
  },
  {
    cod: "SA162",
  },
  {
    cod: "SK97",
  },
  {
    cod: "SN3",
  },
  {
    cod: "RC203",
  },
  {
    cod: "STENLLA",
  },
  {
    cod: "TB003",
  },
  {
    cod: "TB010",
  },
  {
    cod: "TC015",
  },
  {
    cod: "TD005",
  },
  {
    cod: "TD006",
  },
  {
    cod: "TE003",
  },
  {
    cod: "STENMRYMRS",
  },
  {
    cod: "RL28",
  },
  {
    cod: "RL03",
  },
  {
    cod: "168 169",
  },
  {
    cod: "STONEX8",
  },
  {
    cod: "D-002SILVER",
  },
  {
    cod: "D-057",
  },
  {
    cod: "D-002",
  },
  {
    cod: "D-005",
  },
  {
    cod: "D-095",
  },
  {
    cod: "D057",
  },
  {
    cod: "P007",
  },
  {
    cod: "RGOLD",
  },
  {
    cod: "10KGOLD",
  },
  {
    cod: "H002",
  },
  {
    cod: "8275F",
  },
  {
    cod: "LD-004",
  },
  {
    cod: "LD-044",
  },
  {
    cod: "PLD-004",
  },
  {
    cod: "FLECOLPET.55",
  },
  {
    cod: "FPET.56",
  },
  {
    cod: "COT4058",
  },
  {
    cod: "COT4064",
  },
  {
    cod: "COT4068",
  },
  {
    cod: "SUPERMAN",
  },
  {
    cod: "STENCILSW",
  },
  {
    cod: "SIL57",
  },
  {
    cod: "SIL58",
  },
  {
    cod: "TAMIZ",
  },
  {
    cod: "TAMIZP",
  },
  {
    cod: "TAPABOCA",
  },
  {
    cod: "COA0716",
  },
  {
    cod: "COA0718",
  },
  {
    cod: "TARTEREC11X6",
  },
  {
    cod: "HOJ-PFRD-20",
  },
  {
    cod: "HOJ-PFRD-22",
  },
  {
    cod: "503224",
  },
  {
    cod: "STENCILTB",
  },
  {
    cod: "STENCILTC",
  },
  {
    cod: "STENCILTD",
  },
  {
    cod: "STENCILTE",
  },
  {
    cod: "RT",
  },
  {
    cod: "ARAÑA",
  },
  {
    cod: "20071800",
  },
  {
    cod: "BS1010",
  },
  {
    cod: "BS1515",
  },
  {
    cod: "BS2020",
  },
  {
    cod: "BS2525",
  },
  {
    cod: "BS3030",
  },
  {
    cod: "BACUASD35X35X2",
  },
  {
    cod: "BACUASD40X40X2",
  },
  {
    cod: "BACUASD45X45X2",
  },
  {
    cod: "BACUASD50X50X2",
  },
  {
    cod: "BASD20X2",
  },
  {
    cod: "BASD16X2",
  },
  {
    cod: "BASD18X2",
  },
  {
    cod: "BASD22X2",
  },
  {
    cod: "BASD24X2",
  },
  {
    cod: "BASD26X2",
  },
  {
    cod: "BASD28X2",
  },
  {
    cod: "BASD30X2",
  },
  {
    cod: "BASD32X2",
  },
  {
    cod: "BASD34X2",
  },
  {
    cod: "BASD36X2",
  },
  {
    cod: "BARECSD20X30X2",
  },
  {
    cod: "BARECSD25X35X2",
  },
  {
    cod: "BARECSD30X40X2",
  },
  {
    cod: "BARECSD35X45X2",
  },
  {
    cod: "BARECSD40X50X2",
  },
  {
    cod: "TFT18",
  },
  {
    cod: "TFT24",
  },
  {
    cod: "TFT30",
  },
  {
    cod: "TFTOPSY14",
  },
  {
    cod: "TOP16",
  },
  {
    cod: "TFTOPSY20",
  },
  {
    cod: "TFTOPSY26",
  },
  {
    cod: "TFTOPSY24",
  },
  {
    cod: "B4050",
  },
  {
    cod: "B3525",
  },
  {
    cod: "TELGOTOP",
  },
  {
    cod: "AX7120",
  },
  {
    cod: "CHINT4125",
  },
  {
    cod: "FPET.57",
  },
  {
    cod: "S653",
  },
  {
    cod: "TIJERA",
  },
  {
    cod: "YI2033",
  },
  {
    cod: "4186475",
  },
  {
    cod: "4186478",
  },
  {
    cod: "4186473",
  },
  {
    cod: "4186477",
  },
  {
    cod: "TOPMIL",
  },
  {
    cod: "TPG",
  },
  {
    cod: "SIL36",
  },
  {
    cod: "SIL35",
  },
  {
    cod: "HOJACUA16X10",
  },
  {
    cod: "HOJACUA20X10",
  },
  {
    cod: "HOJACUA24X10",
  },
  {
    cod: "HOJACUA28X10",
  },
  {
    cod: "HOJACUA14X10",
  },
  {
    cod: "HOJACUA18X10",
  },
  {
    cod: "HOJACUA22X10",
  },
  {
    cod: "HOJACUA26X10",
  },
  {
    cod: "CA 30X10",
  },
  {
    cod: "CA.21",
  },
  {
    cod: "CA.22",
  },
  {
    cod: "HOJADCUA20X10",
  },
  {
    cod: "HOJADCUA22X10",
  },
  {
    cod: "HOJADCUA24X10",
  },
  {
    cod: "HOJADCUA26X10",
  },
  {
    cod: "HOJADCUA28X10",
  },
  {
    cod: "HOJADCUA30X10",
  },
  {
    cod: "HOJAD28X10",
  },
  {
    cod: "HOJAD30X10",
  },
  {
    cod: "HOJAD24X10",
  },
  {
    cod: "HOJARECT20X10X1",
  },
  {
    cod: "HOJARECT22X12X1",
  },
  {
    cod: "HOJARECT26X16X1",
  },
  {
    cod: "HOJARECT30X20X1",
  },
  {
    cod: "HOJARECT24X14X1",
  },
  {
    cod: "HOJARECT28X18X1",
  },
  {
    cod: "CA.31",
  },
  {
    cod: "CA.32",
  },
  {
    cod: "CA.700",
  },
  {
    cod: "HOJA16X6",
  },
  {
    cod: "HOJA18X6",
  },
  {
    cod: "HOJA20X6",
  },
  {
    cod: "HOJA28X6",
  },
  {
    cod: "HOJA30X6",
  },
  {
    cod: "H1810",
  },
  {
    cod: "H2010",
  },
  {
    cod: "HOJAREN22X6",
  },
  {
    cod: "HOJAREN24X6",
  },
  {
    cod: "HOJAREN26X10",
  },
  {
    cod: "HOJAREN26X6",
  },
  {
    cod: "CA.11",
  },
  {
    cod: "CA.12",
  },
  {
    cod: "HOJAREN28X10",
  },
  {
    cod: "CA.14",
  },
  {
    cod: "SIL49",
  },
  {
    cod: "SIL50",
  },
  {
    cod: "SIL48",
  },
  {
    cod: "SIL47",
  },
  {
    cod: "INN044",
  },
  {
    cod: "INN009",
  },
  {
    cod: "TRANSFX1",
  },
  {
    cod: "WIL084",
  },
  {
    cod: "CHINTRIA",
  },
  {
    cod: "TULI50",
  },
  {
    cod: "PASTE126",
  },
  {
    cod: "FAIRYTUR",
  },
  {
    cod: "KINGTG",
  },
  {
    cod: "FLEESC.43",
  },
  {
    cod: "COT4037",
  },
  {
    cod: "GA75",
  },
  {
    cod: "COT4027",
  },
  {
    cod: "COT4077",
  },
  {
    cod: "COT4023",
  },
  {
    cod: "COT4081",
  },
  {
    cod: "LAMCOM.54",
  },
  {
    cod: "LAMCOM.53",
  },
  {
    cod: "S456",
  },
  {
    cod: "PASTE02A",
  },
  {
    cod: "PASTE02",
  },
  {
    cod: "SF103",
  },
  {
    cod: "VALR394",
  },
  {
    cod: "VAR09P",
  },
  {
    cod: "VAR009",
  },
  {
    cod: "OUTLETVAR",
  },
  {
    cod: "BOTI017B",
  },
  {
    cod: "VTSB",
  },
  {
    cod: "79146",
  },
  {
    cod: "COT5734",
  },
  {
    cod: "FLIPO.05",
  },
  {
    cod: "FPETF.VE",
  },
  {
    cod: "DELIPRIMX1V",
  },
  {
    cod: "KINGNVER",
  },
  {
    cod: "WIL062.5",
  },
  {
    cod: "FPET.59",
  },
  {
    cod: "PASTE101",
  },
  {
    cod: "PIR5009X8VA",
  },
  {
    cod: "FPET.60",
  },
  {
    cod: "D029",
  },
  {
    cod: "FPET.15",
  },
  {
    cod: "KINGVERDE",
  },
  {
    cod: "WIL73.12",
  },
  {
    cod: "FPET.61",
  },
  {
    cod: "DELI2PUNTAVER",
  },
  {
    cod: "FLECOLPET.62",
  },
  {
    cod: "FAIRYVL",
  },
  {
    cod: "FAIRYVM",
  },
  {
    cod: "FLIPO.08",
  },
  {
    cod: "FLECOLPET.63",
  },
  {
    cod: "FPET.64",
  },
  {
    cod: "FPET.94",
  },
  {
    cod: "PUNZ5",
  },
  {
    cod: "KINGVI",
  },
  {
    cod: "FLIPO.06",
  },
  {
    cod: "FPETF.VIO",
  },
  {
    cod: "FPET.16",
  },
  {
    cod: "PASTE129",
  },
  {
    cod: "PASTE122",
  },
  {
    cod: "PASTE117",
  },
  {
    cod: "DELIPASTX1V",
  },
  {
    cod: "WIL073.7",
  },
  {
    cod: "PUNZ1",
  },
  {
    cod: "WIL062.4",
  },
  {
    cod: "FPET.17",
  },
  {
    cod: "FPET.18",
  },
  {
    cod: "DBVP24",
  },
  {
    cod: "SOLP0326",
  },
  {
    cod: "SOLP0330",
  },
  {
    cod: "FD3692",
  },
  {
    cod: "PUN.78",
  },
  {
    cod: "FLEESC.52",
  },
  {
    cod: "KINGWR",
  },
  {
    cod: "SIL28",
  },
  {
    cod: "SIL27",
  },
  {
    cod: "SIL30",
  },
  {
    cod: "SIL29",
  },
  {
    cod: "SIL07",
  },
  {
    cod: "LAMCOM.41",
  },
  {
    cod: "LAMCOM.42",
  },
  {
    cod: "PS25",
  },
  {
    cod: "R18",
  },
  {
    cod: "710-2916",
  },
  {
    cod: "ACITRI",
  },
  {
    cod: "AGENDA",
  },
  {
    cod: "WIL002",
  },
  {
    cod: "568483990304",
  },
  {
    cod: "ALZCOCOAMX1",
  },
  {
    cod: "ALZCOCOAZX1",
  },
  {
    cod: "ALZCOCOCEX1",
  },
  {
    cod: "ALZCOCOMAX1",
  },
  {
    cod: "ALZCOCONAX1",
  },
  {
    cod: "ALZCOCOROJX1",
  },
  {
    cod: "ALZCOCOROSX1",
  },
  {
    cod: "ALZCOCOVEX1",
  },
  {
    cod: "1911-1368",
  },
  {
    cod: "107",
  },
  {
    cod: "102",
  },
  {
    cod: "103",
  },
  {
    cod: "104",
  },
  {
    cod: "113",
  },
  {
    cod: "101",
  },
  {
    cod: "119",
  },
  {
    cod: "110",
  },
  {
    cod: "PASTE08",
  },
  {
    cod: "32607",
  },
  {
    cod: "P001",
  },
  {
    cod: "S3",
  },
  {
    cod: "ACE10X8",
  },
  {
    cod: "ACE12X8",
  },
  {
    cod: "ACE14X8",
  },
  {
    cod: "ACE16X8",
  },
  {
    cod: "AROMATIZADOR",
  },
  {
    cod: "N96103",
  },
  {
    cod: "DEC122",
  },
  {
    cod: "241010",
  },
  {
    cod: "1911-4320",
  },
  {
    cod: "P008",
  },
  {
    cod: "DB45",
  },
  {
    cod: "TELGIBRE30X2",
  },
  {
    cod: "TELGIBRE30X40X2",
  },
  {
    cod: "TELGIBRE24X5",
  },
  {
    cod: "TELGIBRE38X2",
  },
  {
    cod: "BF",
  },
  {
    cod: "BPCC",
  },
  {
    cod: "GA82",
  },
  {
    cod: "ace35x5",
  },
  {
    cod: "RBAÑOBCO",
  },
  {
    cod: "MAPSA60-01",
  },
  {
    cod: "DEC94",
  },
  {
    cod: "DEC103",
  },
  {
    cod: "DEC105",
  },
  {
    cod: "DEC93",
  },
  {
    cod: "DEC102",
  },
  {
    cod: "BATMET185",
  },
  {
    cod: "FPET.83",
  },
  {
    cod: "1911-1300",
  },
  {
    cod: "1911-1367",
  },
  {
    cod: "FLIPO.10",
  },
  {
    cod: "DBB26",
  },
  {
    cod: "PUNZ12",
  },
  {
    cod: "PUNZ11",
  },
  {
    cod: "BONIFVENTA",
  },
  {
    cod: "503221.2",
  },
  {
    cod: "503221-3",
  },
  {
    cod: "7121",
  },
  {
    cod: "7123",
  },
  {
    cod: "7127",
  },
  {
    cod: "7128",
  },
  {
    cod: "7126",
  },
  {
    cod: "7124",
  },
  {
    cod: "7130",
  },
  {
    cod: "504104",
  },
  {
    cod: "6800",
  },
  {
    cod: "4176107",
  },
  {
    cod: "5610",
  },
  {
    cod: "56N",
  },
  {
    cod: "SUGARCACTUS",
  },
  {
    cod: "DELY14V",
  },
  {
    cod: "DELY17CV",
  },
  {
    cod: "DELY17SV",
  },
  {
    cod: "DELY22SV",
  },
  {
    cod: "H1C",
  },
  {
    cod: "COM",
  },
  {
    cod: "COS",
  },
  {
    cod: "HEXADES25",
  },
  {
    cod: "CAKE20",
  },
  {
    cod: "T7B",
  },
  {
    cod: "T12MINI",
  },
  {
    cod: "T7",
  },
  {
    cod: "PASTE09",
  },
  {
    cod: "PASTE10",
  },
  {
    cod: "CHOMAPSACUB",
  },
  {
    cod: "MAPSA58-06",
  },
  {
    cod: "MAPSA58-02",
  },
  {
    cod: "MAPSA58-08",
  },
  {
    cod: "COLOFONDSEMIX1",
  },
  {
    cod: "76202X1",
  },
  {
    cod: "76203/76202B",
  },
  {
    cod: "76204",
  },
  {
    cod: "76206",
  },
  {
    cod: "76207",
  },
  {
    cod: "76208",
  },
  {
    cod: "56015",
  },
  {
    cod: "LODIBAM12",
  },
  {
    cod: "284M",
  },
  {
    cod: "SWEETCLASSI",
  },
  {
    cod: "SWEETCN",
  },
  {
    cod: "CEN1220",
  },
  {
    cod: "COLORDOR",
  },
  {
    cod: "34952",
  },
  {
    cod: "SCONC",
  },
  {
    cod: "LAMCOM.76",
  },
  {
    cod: "PALCONFX4",
  },
  {
    cod: "SWEETCOO",
  },
  {
    cod: "SWEETCOPOS",
  },
  {
    cod: "710-6001",
  },
  {
    cod: "SCORPA",
  },
  {
    cod: "CA.142",
  },
  {
    cod: "MAPCHAN690-2",
  },
  {
    cod: "CUPSIL",
  },
  {
    cod: "SWEETCUP",
  },
  {
    cod: "VA001",
  },
  {
    cod: "VA005",
  },
  {
    cod: "SWEETDENTELLE",
  },
  {
    cod: "DECOLIPO.1B",
  },
  {
    cod: "DECOLIPO.2",
  },
  {
    cod: "DECOLIPO.2B",
  },
  {
    cod: "DECOLIPO.3",
  },
  {
    cod: "DECOLIPO.3B",
  },
  {
    cod: "DECOLIPO.4",
  },
  {
    cod: "DECOLIPO.4B",
  },
  {
    cod: "DECOLIPO.5",
  },
  {
    cod: "DECOLIPO.5B",
  },
  {
    cod: "DECOLIPO.6",
  },
  {
    cod: "DECOLIPO.6B",
  },
  {
    cod: "DECOLIPO.7",
  },
  {
    cod: "DECOLIPO.7B",
  },
  {
    cod: "DECOLIPO.8",
  },
  {
    cod: "DECOLIPO.8B",
  },
  {
    cod: "DEGLABRINEU",
  },
  {
    cod: "DBD22",
  },
  {
    cod: "COPADOD",
  },
  {
    cod: "DOSI01",
  },
  {
    cod: "SWEETDROP",
  },
  {
    cod: "SWEETDUBLING",
  },
  {
    cod: "VC1916",
  },
  {
    cod: "DULR01A",
  },
  {
    cod: "DULCE CAR",
  },
  {
    cod: "LORANN",
  },
  {
    cod: "DEWESEVAIX5L",
  },
  {
    cod: "19071077",
  },
  {
    cod: "P010",
  },
  {
    cod: "SWEETF",
  },
  {
    cod: "DOLCREFI",
  },
  {
    cod: "FCORHIPO",
  },
  {
    cod: "FA317",
  },
  {
    cod: "FA353",
  },
  {
    cod: "FA123",
  },
  {
    cod: "FA208",
  },
  {
    cod: "FA209",
  },
  {
    cod: "FA207",
  },
  {
    cod: "FA355",
  },
  {
    cod: "FA309",
  },
  {
    cod: "FA342",
  },
  {
    cod: "FLOGUSRODTEXTU",
  },
  {
    cod: "FLOGUSRODTEXPIE",
  },
  {
    cod: "710-353",
  },
  {
    cod: "SFLRO",
  },
  {
    cod: "CA.66",
  },
  {
    cod: "4303",
  },
  {
    cod: "5315",
  },
  {
    cod: "FRATCOMB2X1",
  },
  {
    cod: "4302",
  },
  {
    cod: "217",
  },
  {
    cod: "1115",
  },
  {
    cod: "BCOLFUC",
  },
  {
    cod: "GA82",
  },
  {
    cod: "P004",
  },
  {
    cod: "ARGGARRAMAN1062",
  },
  {
    cod: "CIRGELS/SX1",
  },
  {
    cod: "8009",
  },
  {
    cod: "12164A",
  },
  {
    cod: "402003",
  },
  {
    cod: "DEWGLUX180",
  },
  {
    cod: "DEWGLUX6",
  },
  {
    cod: "P006",
  },
  {
    cod: "P005",
  },
  {
    cod: "MAPEESFER",
  },
  {
    cod: "MAPCHOC",
  },
  {
    cod: "GRANA",
  },
  {
    cod: "PROGRANAAMX1",
  },
  {
    cod: "PROGRANAAZX1",
  },
  {
    cod: "PROGRANABCAX1",
  },
  {
    cod: "PROGRANACEX1",
  },
  {
    cod: "PROGRANACHOX1",
  },
  {
    cod: "PROGRANALIX1",
  },
  {
    cod: "PROGRANAMAX1",
  },
  {
    cod: "PROGRANAMULTIX1",
  },
  {
    cod: "PROGRANANARX1",
  },
  {
    cod: "PROGRANANEX1",
  },
  {
    cod: "PROGRANAPLAX1",
  },
  {
    cod: "PROGRANAROJX1",
  },
  {
    cod: "PROGRANAROSX1",
  },
  {
    cod: "PROGRANAVEMX1",
  },
  {
    cod: "PROGRANAVEX1",
  },
  {
    cod: "GRA15",
  },
  {
    cod: "SWEETGR",
  },
  {
    cod: "SIL55",
  },
  {
    cod: "ALFGUAYMA",
  },
  {
    cod: "SWEETG",
  },
  {
    cod: "SWEETI",
  },
  {
    cod: "JABONL",
  },
  {
    cod: "CIRJALFANX10",
  },
  {
    cod: "CHINTLAP",
  },
  {
    cod: "DISLENCHOX0.5",
  },
  {
    cod: "LENTCHOCGR",
  },
  {
    cod: "VC7026",
  },
  {
    cod: "P014",
  },
  {
    cod: "MOLDECHOCLOVE",
  },
  {
    cod: "P003",
  },
  {
    cod: "MBUFFYFRUT",
  },
  {
    cod: "GONMALVX300",
  },
  {
    cod: "PUNTCOMMANT",
  },
  {
    cod: "MAPSABOMSE1KG",
  },
  {
    cod: "MAPMULTI",
  },
  {
    cod: "MAPRELLDUL59-28",
  },
  {
    cod: "MAPRELLFRU59-24",
  },
  {
    cod: "MAPRELLMEN59-29",
  },
  {
    cod: "MAPPECES",
  },
  {
    cod: "MAPRELLTIRA59-4",
  },
  {
    cod: "CHINT14132",
  },
  {
    cod: "SIL22",
  },
  {
    cod: "WIL010",
  },
  {
    cod: "710-7160",
  },
  {
    cod: "1925",
  },
  {
    cod: "VC7010",
  },
  {
    cod: "115019",
  },
  {
    cod: "5017",
  },
  {
    cod: "30023",
  },
  {
    cod: "5022",
  },
  {
    cod: "3294331",
  },
  {
    cod: "MOLDSTARDWARS",
  },
  {
    cod: "WIL000",
  },
  {
    cod: "WIL001",
  },
  {
    cod: "MOLDTORTERAALUM",
  },
  {
    cod: "ALU103",
  },
  {
    cod: "ALU83",
  },
  {
    cod: "1817",
  },
  {
    cod: "1818",
  },
  {
    cod: "710-2217",
  },
  {
    cod: "SWEETMOON",
  },
  {
    cod: "32638",
  },
  {
    cod: "MAPMOUCAFXK693-",
  },
  {
    cod: "MAPMOUCAFXK698-",
  },
  {
    cod: "MAPMOUCHOXK697-",
  },
  {
    cod: "MAPMOUFRUXK695-",
  },
  {
    cod: "MAPMOUVAIXK696-",
  },
  {
    cod: "MAPMOULIMXK694-",
  },
  {
    cod: "MAPMOUMARAXK690",
  },
  {
    cod: "1911-491",
  },
  {
    cod: "1911-490",
  },
  {
    cod: "1911-402",
  },
  {
    cod: "OUTLETMOLDSILI",
  },
  {
    cod: "OUTLETCORTEXP",
  },
  {
    cod: "PALMCOFITE",
  },
  {
    cod: "PALMLETEJACHOOK",
  },
  {
    cod: "SUGARPALO",
  },
  {
    cod: "BOTI012",
  },
  {
    cod: "PRULE",
  },
  {
    cod: "PAPELH",
  },
  {
    cod: "BOMBB",
  },
  {
    cod: "BOMBR",
  },
  {
    cod: "BOMBBM",
  },
  {
    cod: "BOMBBR",
  },
  {
    cod: "BOMBC",
  },
  {
    cod: "BOMBBC",
  },
  {
    cod: "BOMBAC",
  },
  {
    cod: "BOMBOR",
  },
  {
    cod: "BOMBCEL",
  },
  {
    cod: "BOMBDOR",
  },
  {
    cod: "BOMBAM",
  },
  {
    cod: "BOMBROJ",
  },
  {
    cod: "BOMBAR",
  },
  {
    cod: "MAPRELLALM59-44",
  },
  {
    cod: "MAPRELLCAF59-47",
  },
  {
    cod: "MAPRELLCHOC59-2",
  },
  {
    cod: "MAPRELLLIM59-43",
  },
  {
    cod: "MAPRELLSAM59-45",
  },
  {
    cod: "GHEMARR1043-6",
  },
  {
    cod: "MAPRELLNUT59-26",
  },
  {
    cod: "GHEALM1013-6",
  },
  {
    cod: "SWEETPEARLS",
  },
  {
    cod: "710-478",
  },
  {
    cod: "PERAMA50",
  },
  {
    cod: "PERCELES50",
  },
  {
    cod: "PERDORA50",
  },
  {
    cod: "PERROJAS50",
  },
  {
    cod: "PERLAVERNAV",
  },
  {
    cod: "PERVERDES50",
  },
  {
    cod: "PERVIOLETA50",
  },
  {
    cod: "SIL14",
  },
  {
    cod: "SIL16",
  },
  {
    cod: "SIL17",
  },
  {
    cod: "SIL11",
  },
  {
    cod: "SIL13",
  },
  {
    cod: "SIL12",
  },
  {
    cod: "PICOGLOBO11",
  },
  {
    cod: "PICOGLOBO12",
  },
  {
    cod: "PICOGLOBO14",
  },
  {
    cod: "PICOGLOBO17",
  },
  {
    cod: "ATECO795",
  },
  {
    cod: "7131",
  },
  {
    cod: "ESTR20",
  },
  {
    cod: "HGC20",
  },
  {
    cod: "HGC24",
  },
  {
    cod: "LGR20P",
  },
  {
    cod: "LGRP",
  },
  {
    cod: "PINCELSILI",
  },
  {
    cod: "2591",
  },
  {
    cod: "VC18010",
  },
  {
    cod: "CA45AM",
  },
  {
    cod: "CA45C",
  },
  {
    cod: "MP",
  },
  {
    cod: "COPADOP",
  },
  {
    cod: "PROPLN1X4",
  },
  {
    cod: "SWEETPLUM",
  },
  {
    cod: "PQ01A2",
  },
  {
    cod: "23080915",
  },
  {
    cod: "200014",
  },
  {
    cod: "SUGARPUNZON",
  },
  {
    cod: "130",
  },
  {
    cod: "165",
  },
  {
    cod: "516M",
  },
  {
    cod: "INN007",
  },
  {
    cod: "AX8231",
  },
  {
    cod: "1911-1364",
  },
  {
    cod: "PAPELMANTE",
  },
  {
    cod: "57042",
  },
  {
    cod: "784",
  },
  {
    cod: "1911-1361",
  },
  {
    cod: "164",
  },
  {
    cod: "P009",
  },
  {
    cod: "P0017",
  },
  {
    cod: "SWEETROSE",
  },
  {
    cod: "PUNROSES",
  },
  {
    cod: "SWEETR",
  },
  {
    cod: "19071367",
  },
  {
    cod: "AGUISALSCHOC",
  },
  {
    cod: "KEU01",
  },
  {
    cod: "KEU03",
  },
  {
    cod: "SEMAMAX1",
  },
  {
    cod: "SEMSESAX1",
  },
  {
    cod: "CSET6",
  },
  {
    cod: "SIL19",
  },
  {
    cod: "SIL18",
  },
  {
    cod: "PREDRO",
  },
  {
    cod: "SOPLETELAPIZ",
  },
  {
    cod: "WIL236",
  },
  {
    cod: "STENSA",
  },
  {
    cod: "STENSC",
  },
  {
    cod: "STENSK",
  },
  {
    cod: "STENSR",
  },
  {
    cod: "STENCYLRP",
  },
  {
    cod: "D023",
  },
  {
    cod: "D041",
  },
  {
    cod: "120",
  },
  {
    cod: "TARTEX10",
  },
  {
    cod: "TARTEX12",
  },
  {
    cod: "TARTEX6",
  },
  {
    cod: "TARTEX8",
  },
  {
    cod: "COA0720",
  },
  {
    cod: "TELGOTORT",
  },
  {
    cod: "SWEETTIARA",
  },
  {
    cod: "TIME",
  },
  {
    cod: "7237",
  },
  {
    cod: "7244",
  },
  {
    cod: "7235",
  },
  {
    cod: "7241",
  },
  {
    cod: "SILITORTA",
  },
  {
    cod: "DHZDES18X6",
  },
  {
    cod: "TRANSCIRCORA",
  },
  {
    cod: "TRANSKITTY",
  },
  {
    cod: "P011",
  },
  {
    cod: "128",
  },
  {
    cod: "P002",
  },
  {
    cod: "SWEETUNIC",
  },
  {
    cod: "PASTE12",
  },
  {
    cod: "568483990314",
  },
  {
    cod: "79139",
  },
  {
    cod: "79147",
  },
  {
    cod: "1911-1356",
  },
  {
    cod: "PASTE8002",
  },
  {
    cod: "1911-401",
  },
  {
    cod: "1911-1358",
  },
  {
    cod: "122",
  },
  {
    cod: "SWEETWAVES",
  },
  {
    cod: "SWEETZ",
  },
  {
    cod: "AEROM",
  },
  {
    cod: "ALBUMX1",
  },
  {
    cod: "REP4631",
  },
  {
    cod: "AZNEGRALZ",
  },
  {
    cod: "AZRUBALZ",
  },
  {
    cod: "318712",
  },
  {
    cod: "C1371",
  },
  {
    cod: "40862",
  },
  {
    cod: "ICEPOPGRANDEB",
  },
  {
    cod: "105051",
  },
  {
    cod: "CLOUD",
  },
  {
    cod: "C311",
  },
  {
    cod: "CTART",
  },
  {
    cod: "BDESH",
  },
  {
    cod: "7026016",
  },
  {
    cod: "SOLP0528D",
  },
  {
    cod: "5044",
  },
  {
    cod: "PURATOS",
  },
  {
    cod: "5046",
  },
  {
    cod: "COLCHOC",
  },
  {
    cod: "COLFRUT",
  },
  {
    cod: "COLVAI",
  },
  {
    cod: "CHOCOL1",
  },
  {
    cod: "S681",
  },
  {
    cod: "4897049199132",
  },
  {
    cod: "P23",
  },
  {
    cod: "P025D",
  },
  {
    cod: "P024",
  },
  {
    cod: "BR0036",
  },
  {
    cod: "GLUCOSAX3",
  },
  {
    cod: "DOLCREHA",
  },
  {
    cod: "DOLCREHALP",
  },
  {
    cod: "FH0036",
  },
  {
    cod: "7016",
  },
  {
    cod: "VC7300",
  },
  {
    cod: "VC6300",
  },
  {
    cod: "ROCKLENCHOX1",
  },
  {
    cod: "COT8069X150",
  },
  {
    cod: "42327",
  },
  {
    cod: "MLUP",
  },
  {
    cod: "MPAC",
  },
  {
    cod: "REP3602",
  },
  {
    cod: "DOLCREOH150",
  },
  {
    cod: "P022",
  },
  {
    cod: "OUTCARX1.5",
  },
  {
    cod: "OUTBAMAZAX0.5",
  },
  {
    cod: "S458",
  },
  {
    cod: "BOMBDORD",
  },
  {
    cod: "BOMBFUCS",
  },
  {
    cod: "BOMBAMA",
  },
  {
    cod: "BOMBAB",
  },
  {
    cod: "BOMBARO",
  },
  {
    cod: "BOMBCE",
  },
  {
    cod: "BOMBCM",
  },
  {
    cod: "BOMBCOB",
  },
  {
    cod: "BOMBCU",
  },
  {
    cod: "BOMBDC",
  },
  {
    cod: "BOMBLI",
  },
  {
    cod: "BOMBCMA",
  },
  {
    cod: "BOMBNB",
  },
  {
    cod: "BOMBNEG",
  },
  {
    cod: "BOMNB",
  },
  {
    cod: "BOMBRB",
  },
  {
    cod: "BOMBROB",
  },
  {
    cod: "BOMBRG",
  },
  {
    cod: "BOMBVR",
  },
  {
    cod: "BOMBVM",
  },
  {
    cod: "BOMBVEM",
  },
  {
    cod: "BOMBVB",
  },
  {
    cod: "BOMBVIO",
  },
  {
    cod: "PU500",
  },
  {
    cod: "VCHH134",
  },
  {
    cod: "PHOR",
  },
  {
    cod: "DBROW",
  },
  {
    cod: "DBUDV",
  },
  {
    cod: "DCREMC",
  },
  {
    cod: "DDONC",
  },
  {
    cod: "DDONAVAI",
  },
  {
    cod: "DGLASE",
  },
  {
    cod: "DMEREN",
  },
  {
    cod: "DMUFFB",
  },
  {
    cod: "DMUFFC",
  },
  {
    cod: "DOLCRERF150",
  },
  {
    cod: "350052",
  },
  {
    cod: "DOLCRESUP150",
  },
  {
    cod: "P020",
  },
  {
    cod: "BC24X2",
  },
  {
    cod: "P019",
  },
  {
    cod: "B002",
  },
  {
    cod: "008U3",
  },
  {
    cod: "79270",
  },
  {
    cod: "ACE18X8",
  },
  {
    cod: "SILIFLORF",
  },
  {
    cod: "acecann",
  },
  {
    cod: "AX0100",
  },
  {
    cod: "BRECT40",
  },
  {
    cod: "BRECT30403",
  },
  {
    cod: "54787",
  },
  {
    cod: "1907-1367",
  },
  {
    cod: "4172581",
  },
  {
    cod: "CH3110",
  },
  {
    cod: "FAIRYAQ",
  },
  {
    cod: "GAN01",
  },
  {
    cod: "CAC91",
  },
  {
    cod: "BLUE",
  },
  {
    cod: "PIROMIXROSA",
  },
  {
    cod: "PUNZ13",
  },
  {
    cod: "PUNZ14",
  },
  {
    cod: "CANDY1",
  },
  {
    cod: "CANDY2",
  },
  {
    cod: "CANDY3",
  },
  {
    cod: "CANDY5",
  },
  {
    cod: "CANDY6",
  },
  {
    cod: "CANDY7",
  },
  {
    cod: "CANDY8",
  },
  {
    cod: "CANDY9",
  },
  {
    cod: "SILIANIV",
  },
  {
    cod: "HEXAMID12",
  },
  {
    cod: "CARTBAGXS",
  },
  {
    cod: "CARTBAGM",
  },
  {
    cod: "CARTBAGL",
  },
  {
    cod: "CP7.5",
  },
  {
    cod: "2CUPREC",
  },
  {
    cod: "CACAOPRO",
  },
  {
    cod: "CACAOPROE",
  },
  {
    cod: "402008",
  },
  {
    cod: "402035",
  },
  {
    cod: "60105",
  },
  {
    cod: "BV25MN",
  },
  {
    cod: "BV20MN",
  },
  {
    cod: "BV20HD",
  },
  {
    cod: "DPOLH",
  },
  {
    cod: "BV20MB",
  },
  {
    cod: "BV20GEOR",
  },
  {
    cod: "BV20F",
  },
  {
    cod: "GAN12P",
  },
  {
    cod: "GAN30P",
  },
  {
    cod: "3DAUS",
  },
  {
    cod: "4097726",
  },
  {
    cod: "4093188",
  },
  {
    cod: "405006",
  },
  {
    cod: "4081",
  },
  {
    cod: "710088",
  },
  {
    cod: "GAN40P",
  },
  {
    cod: "SILIFORMAS",
  },
  {
    cod: "HOLA30",
  },
  {
    cod: "HOLA40",
  },
  {
    cod: "HOLA50",
  },
  {
    cod: "HOLATRE",
  },
  {
    cod: "HOLACUA",
  },
  {
    cod: "HOLACIN",
  },
  {
    cod: "TOPPFC",
  },
  {
    cod: "TOPPFCC",
  },
  {
    cod: "TOPPFCH",
  },
  {
    cod: "TOPPCD",
  },
  {
    cod: "TOPPED",
  },
  {
    cod: "TOPPDD",
  },
  {
    cod: "TOPPMD",
  },
  {
    cod: "TOPCZD",
  },
  {
    cod: "TOPPSLP",
  },
  {
    cod: "TOPPSFR",
  },
  {
    cod: "TOPPST",
  },
  {
    cod: "TOPPSCH",
  },
  {
    cod: "SWEETROSA",
  },
  {
    cod: "BALANZAX5",
  },
  {
    cod: "MINIMUFFX12",
  },
  {
    cod: "HIDROAMAC",
  },
  {
    cod: "HIDROANA",
  },
  {
    cod: "HIDROAZB",
  },
  {
    cod: "HIDROAZM",
  },
  {
    cod: "HIDROBCO",
  },
  {
    cod: "HIDROBOR",
  },
  {
    cod: "HIDROCEL",
  },
  {
    cod: "HIDROLILA",
  },
  {
    cod: "HIDRONSKIN",
  },
  {
    cod: "HIDRONHUMO",
  },
  {
    cod: "HIDROROJOCH",
  },
  {
    cod: "HIDROROJOC",
  },
  {
    cod: "HIDROROSAS",
  },
  {
    cod: "HIDROROSAT",
  },
  {
    cod: "HIDROTUR",
  },
  {
    cod: "HIDROVERH",
  },
  {
    cod: "HIDROVERL",
  },
  {
    cod: "HIDROVERV",
  },
  {
    cod: "HIDROVIOP",
  },
  {
    cod: "DECODOR",
  },
  {
    cod: "DECOMAGIC",
  },
  {
    cod: "DECOLOVE",
  },
  {
    cod: "DECOPRIN",
  },
  {
    cod: "DECOLOL",
  },
  {
    cod: "DECOUNI",
  },
  {
    cod: "DECOPAST",
  },
  {
    cod: "DECOVAM",
  },
  {
    cod: "DECOMAR",
  },
  {
    cod: "DECOPARIS",
  },
  {
    cod: "DECOFROZ",
  },
  {
    cod: "DNEA",
  },
  {
    cod: "DRVP",
  },
  {
    cod: "SETNORTE",
  },
  {
    cod: "CERECARLE200",
  },
  {
    cod: "PANDULCE1000VL",
  },
  {
    cod: "PANDULCE1000GOA",
  },
  {
    cod: "PANDULCE500GOA",
  },
  {
    cod: "PANDULCE500VL",
  },
  {
    cod: "PANDULCE500PAZ",
  },
  {
    cod: "PANDULCE250GOA",
  },
  {
    cod: "PANDULCE250VL",
  },
  {
    cod: "PANDULCE100VL",
  },
  {
    cod: "PANDULCE100GOA",
  },
  {
    cod: "PANDULCE100PAZ",
  },
  {
    cod: "B003",
  },
  {
    cod: "B001",
  },
  {
    cod: "B007",
  },
  {
    cod: "B014",
  },
  {
    cod: "B017",
  },
  {
    cod: "B023",
  },
  {
    cod: "B024",
  },
  {
    cod: "B025",
  },
  {
    cod: "P013",
  },
  {
    cod: "P16",
  },
  {
    cod: "P021",
  },
  {
    cod: "CANDY11",
  },
  {
    cod: "SILIANIMX38",
  },
  {
    cod: "DMUFFV",
  },
  {
    cod: "MCAKE20",
  },
  {
    cod: "DISCO15",
  },
  {
    cod: "ACE20X8",
  },
  {
    cod: "ACE22X8",
  },
  {
    cod: "ACE24X8",
  },
  {
    cod: "ESCHOCO",
  },
  {
    cod: "55BA7678",
  },
  {
    cod: "55BA7679",
  },
  {
    cod: "S31891",
  },
  {
    cod: "S3192",
  },
  {
    cod: "S694",
  },
  {
    cod: "S729",
  },
  {
    cod: "STX1",
  },
  {
    cod: "STX2",
  },
  {
    cod: "S31893",
  },
  {
    cod: "S31911",
  },
  {
    cod: "S31912",
  },
  {
    cod: "S31913",
  },
  {
    cod: "PANDULCE500F",
  },
  {
    cod: "FC0033",
  },
  {
    cod: "2001405",
  },
  {
    cod: "634805",
  },
  {
    cod: "241020",
  },
  {
    cod: "DECODINO",
  },
  {
    cod: "DECOSUP",
  },
  {
    cod: "OB10SS",
  },
  {
    cod: "BOTI034B",
  },
  {
    cod: "BOTI033B",
  },
  {
    cod: "SP1",
  },
  {
    cod: "210500149",
  },
  {
    cod: "210500071",
  },
  {
    cod: "210500066",
  },
  {
    cod: "210500145",
  },
  {
    cod: "210500067",
  },
  {
    cod: "210500070",
  },
  {
    cod: "BB20",
  },
  {
    cod: "BCUAMOT",
  },
  {
    cod: "B22X9",
  },
  {
    cod: "BZIGR",
  },
  {
    cod: "BRECTCOP",
  },
  {
    cod: "BRECTMER",
  },
  {
    cod: "BRMUE",
  },
  {
    cod: "BBM20",
  },
  {
    cod: "BBM25MC",
  },
  {
    cod: "BBM25FN",
  },
  {
    cod: "BBC25MC",
  },
  {
    cod: "BB25ROSV",
  },
  {
    cod: "CAJABUD",
  },
  {
    cod: "CAJADIVNAV",
  },
  {
    cod: "CAJAPDNAV",
  },
  {
    cod: "B016",
  },
  {
    cod: "B013",
  },
  {
    cod: "BOTI031",
  },
  {
    cod: "BOTI032B",
  },
  {
    cod: "BOTI031B",
  },
  {
    cod: "OTA300",
  },
  {
    cod: "HOJADCUAD14X10",
  },
  {
    cod: "HOJADCUAD16X10",
  },
  {
    cod: "HOJADCUAD18X10",
  },
  {
    cod: "HOJRECD20",
  },
  {
    cod: "HOJRECD22",
  },
  {
    cod: "HOJRECD24",
  },
  {
    cod: "KINGTIFF",
  },
  {
    cod: "KINGSPR",
  },
  {
    cod: "KINGSPS",
  },
  {
    cod: "SILIHELATX3",
  },
  {
    cod: "KINGLASERLB",
  },
  {
    cod: "KINGLASERFG",
  },
  {
    cod: "KINGLASERFP",
  },
  {
    cod: "KINGLASERFO",
  },
  {
    cod: "PUNZ15",
  },
  {
    cod: "BOTI035B",
  },
  {
    cod: "952332",
  },
  {
    cod: "952769",
  },
  {
    cod: "952776",
  },
  {
    cod: "208707",
  },
  {
    cod: "208738",
  },
  {
    cod: "208721",
  },
  {
    cod: "208714",
  },
  {
    cod: "208745",
  },
  {
    cod: "GLOBOBT",
  },
  {
    cod: "TOPPLP",
  },
  {
    cod: "TOPPCH",
  },
  {
    cod: "TOPPFY",
  },
  {
    cod: "TOPPBE",
  },
  {
    cod: "TOPPALL",
  },
  {
    cod: "TOPPDES",
  },
  {
    cod: "TOPPSMI",
  },
  {
    cod: "TOPPSIEM",
  },
  {
    cod: "TOPPVIVE",
  },
  {
    cod: "TOPPFDIA",
  },
  {
    cod: "TOPPLOVE",
  },
  {
    cod: "TOPPBDE",
  },
  {
    cod: "TOPPJLP",
  },
  {
    cod: "TOPPYLY",
  },
  {
    cod: "TFCCN",
  },
  {
    cod: "TFCHC",
  },
  {
    cod: "TFCHN",
  },
  {
    cod: "TFCHE",
  },
  {
    cod: "P028",
  },
  {
    cod: "B028",
  },
  {
    cod: "ALU1011",
  },
  {
    cod: "ESP0329",
  },
  {
    cod: "MH1",
  },
  {
    cod: "TH1",
  },
  {
    cod: "FBN24",
  },
  {
    cod: "FARE24",
  },
  {
    cod: "FBCOPN",
  },
  {
    cod: "SIDR20",
  },
  {
    cod: "SID20",
  },
  {
    cod: "HG20",
  },
  {
    cod: "HG24",
  },
  {
    cod: "HC20",
  },
  {
    cod: "HC24",
  },
  {
    cod: "BCERAMICA",
  },
  {
    cod: "942",
  },
  {
    cod: "COOLMAY",
  },
  {
    cod: "COOLMIN",
  },
  {
    cod: "QUESOM",
  },
  {
    cod: "ZN2363",
  },
  {
    cod: "4186479",
  },
  {
    cod: "4186480",
  },
  {
    cod: "1719C",
  },
  {
    cod: "10022703",
  },
  {
    cod: "SOL0003B",
  },
  {
    cod: "4082",
  },
  {
    cod: "4034",
  },
  {
    cod: "4030",
  },
  {
    cod: "4038",
  },
  {
    cod: "4040",
  },
  {
    cod: "4044",
  },
  {
    cod: "4045",
  },
  {
    cod: "DOL118",
  },
  {
    cod: "B30405",
  },
  {
    cod: "SDONAG",
  },
  {
    cod: "OB05CE",
  },
  {
    cod: "OB05RS",
  },
  {
    cod: "CH0420",
  },
  {
    cod: "CH0418",
  },
  {
    cod: "CH0416",
  },
  {
    cod: "021B4",
  },
  {
    cod: "464145",
  },
  {
    cod: "464121",
  },
  {
    cod: "464138",
  },
  {
    cod: "MANSS",
  },
  {
    cod: "MANCS",
  },
  {
    cod: "PUMJ",
  },
  {
    cod: "BAND",
  },
  {
    cod: "MIXPAP",
  },
  {
    cod: "CCTS2",
  },
  {
    cod: "CW4",
  },
  {
    cod: "ALME",
  },
  {
    cod: "NUEPE",
  },
  {
    cod: "CANDY12",
  },
  {
    cod: "60011",
  },
  {
    cod: "336C",
  },
  {
    cod: "32744",
  },
  {
    cod: "PIST",
  },
  {
    cod: "AVE",
  },
  {
    cod: "MANSSX2",
  },
  {
    cod: "LM20",
  },
  {
    cod: "LM4524",
  },
  {
    cod: "LMR20",
  },
  {
    cod: "LMR24",
  },
  {
    cod: "FBN27",
  },
  {
    cod: "FARE28",
  },
  {
    cod: "FUJIRB",
  },
  {
    cod: "FV24",
  },
  {
    cod: "FUJIB",
  },
  {
    cod: "BV30MB",
  },
  {
    cod: "BV30MR",
  },
  {
    cod: "BV25MB",
  },
  {
    cod: "BV20MR",
  },
  {
    cod: "B018",
  },
  {
    cod: "P018",
  },
  {
    cod: "DECOTOPP",
  },
  {
    cod: "DECOPAS",
  },
  {
    cod: "BV30F",
  },
  {
    cod: "BV25HD",
  },
  {
    cod: "BV25FH",
  },
  {
    cod: "BV25HA",
  },
  {
    cod: "BV25MV",
  },
  {
    cod: "BV25HV",
  },
  {
    cod: "BV25HVAN",
  },
  {
    cod: "BV25AG",
  },
  {
    cod: "CAJA15x15x15R",
  },
  {
    cod: "CAJA12x12x12R",
  },
  {
    cod: "CAJA15x15x18R",
  },
  {
    cod: "CAJA15x10x1",
  },
  {
    cod: "CAJARPR",
  },
  {
    cod: "CAJA23x16",
  },
  {
    cod: "CAJA16.5",
  },
  {
    cod: "CAJA18x15",
  },
  {
    cod: "PC340A",
  },
  {
    cod: "CAJA15x15x15C",
  },
  {
    cod: "CAJA15x15x15G",
  },
  {
    cod: "CAJA12x12x12C",
  },
  {
    cod: "CAJA15x15x18C",
  },
  {
    cod: "CAJARPG",
  },
  {
    cod: "BREC30205",
  },
  {
    cod: "DM4543",
  },
  {
    cod: "DM4686",
  },
  {
    cod: "3DBA",
  },
  {
    cod: "BOTI036B",
  },
  {
    cod: "404098",
  },
  {
    cod: "404097",
  },
  {
    cod: "BOMBROSA8X8",
  },
  {
    cod: "BOMBRYD",
  },
  {
    cod: "BOMBABBP",
  },
  {
    cod: "BOMBBV",
  },
  {
    cod: "BOMBBT",
  },
  {
    cod: "BOMBBF",
  },
  {
    cod: "BOMBBMT",
  },
  {
    cod: "BOMBBVP",
  },
  {
    cod: "DGELBR",
  },
  {
    cod: "321524M",
  },
  {
    cod: "321524F",
  },
  {
    cod: "321524T",
  },
  {
    cod: "CHIN018G10",
  },
  {
    cod: "PASTEB",
  },
  {
    cod: "BCERA",
  },
  {
    cod: "PI100",
  },
  {
    cod: "F530",
  },
  {
    cod: "1.10E+16",
  },
  {
    cod: "BB20X3",
  },
  {
    cod: "BB25X3",
  },
  {
    cod: "BBF25X3",
  },
  {
    cod: "BBF203",
  },
  {
    cod: "BBO20X3",
  },
  {
    cod: "BBO25X3",
  },
  {
    cod: "HASP",
  },
  {
    cod: "AZUM",
  },
  {
    cod: "CORA",
  },
  {
    cod: "NM500",
  },
  {
    cod: "OUTACE",
  },
  {
    cod: "PICOGLOBO2",
  },
  {
    cod: "PICOGLOBO13",
  },
  {
    cod: "GLF11",
  },
  {
    cod: "GLF10",
  },
  {
    cod: "GLF09",
  },
  {
    cod: "GB23",
  },
  {
    cod: "GR23",
  },
  {
    cod: "GVP25",
  },
  {
    cod: "sil20",
  },
  {
    cod: "7125",
  },
  {
    cod: "7125g",
  },
  {
    cod: "7132",
  },
  {
    cod: "7134",
  },
  {
    cod: "7135",
  },
  {
    cod: "3DRACING",
  },
  {
    cod: "MMbudin",
  },
  {
    cod: "mmtarteleta",
  },
  {
    cod: "7574ro",
  },
  {
    cod: "7574ve",
  },
  {
    cod: "7574Gri",
  },
  {
    cod: "7574neg",
  },
  {
    cod: "GCOOK",
  },
  {
    cod: "MMTART",
  },
  {
    cod: "RAMO",
  },
  {
    cod: "MR.12",
  },
  {
    cod: "MR.13",
  },
  {
    cod: "MR.15",
  },
  {
    cod: "MR.16",
  },
  {
    cod: "MR.17",
  },
  {
    cod: "MR.20",
  },
  {
    cod: "MR.22",
  },
  {
    cod: "MR.25",
  },
  {
    cod: "MR.26",
  },
  {
    cod: "MR.29",
  },
  {
    cod: "MC001",
  },
  {
    cod: "MR002",
  },
  {
    cod: "AB002",
  },
  {
    cod: "F4950",
  },
  {
    cod: "CAI588",
  },
  {
    cod: "65459",
  },
  {
    cod: "46105",
  },
  {
    cod: "65459",
  },
  {
    cod: "10495",
  },
  {
    cod: "MMUFx15",
  },
  {
    cod: "GP15",
  },
  {
    cod: "GP16",
  },
  {
    cod: "GP17",
  },
  {
    cod: "GP18",
  },
  {
    cod: "GP19",
  },
  {
    cod: "GP20",
  },
  {
    cod: "GP21",
  },
  {
    cod: "GP22",
  },
  {
    cod: "GP23",
  },
  {
    cod: "901053",
  },
  {
    cod: "KINGROG",
  },
  {
    cod: "TFCCD",
  },
  {
    cod: "TFCHCD",
  },
  {
    cod: "TFCHD",
  },
  {
    cod: "TDHB",
  },
  {
    cod: "TDFCG",
  },
  {
    cod: "TFCHED",
  },
  {
    cod: "TNHB",
  },
  {
    cod: "TNFCG",
  },
  {
    cod: "10021511",
  },
  {
    cod: "10020811",
  },
  {
    cod: "10021011",
  },
  {
    cod: "BBO20X5",
  },
  {
    cod: "BF205",
  },
  {
    cod: "GAN13",
  },
  {
    cod: "B19CRM",
  },
  {
    cod: "B19CNS",
  },
  {
    cod: "B19CDR",
  },
  {
    cod: "B19BCD",
  },
  {
    cod: "B19VCV",
  },
  {
    cod: "B19BCCA",
  },
  {
    cod: "B19CCRR",
  },
  {
    cod: "B19BCDC",
  },
  {
    cod: "B19BFRR",
  },
  {
    cod: "B19GR",
  },
  {
    cod: "B19BRNCV",
  },
  {
    cod: "B19VCN",
  },
  {
    cod: "B19BCN",
  },
  {
    cod: "B25CU",
  },
  {
    cod: "B25M3",
  },
  {
    cod: "BV25CF",
  },
  {
    cod: "B25PV",
  },
  {
    cod: "B25CC",
  },
  {
    cod: "B25LRV",
  },
  {
    cod: "B25MBG",
  },
  {
    cod: "BF25BCG",
  },
  {
    cod: "B30CC",
  },
  {
    cod: "B30CU",
  },
  {
    cod: "BV30GR",
  },
  {
    cod: "B30VE",
  },
  {
    cod: "B30GRB",
  },
  {
    cod: "BV30CF",
  },
  {
    cod: "B30HVAN",
  },
  {
    cod: "B30BM",
  },
  {
    cod: "B30M3",
  },
  {
    cod: "P08036S",
  },
  {
    cod: "BCOLDOR",
  },
  {
    cod: "MR.31",
  },
  {
    cod: "PBOMRRPM",
  },
  {
    cod: "PBOMRVNM",
  },
  {
    cod: "PBOMRDNM",
  },
  {
    cod: "PR002",
  },
  {
    cod: "PIR5008VI",
  },
  {
    cod: "TABLETASMV",
  },
  {
    cod: "TABLETASM",
  },
  {
    cod: "8001",
  },
  {
    cod: "943",
  },
  {
    cod: "946",
  },
  {
    cod: "945",
  },
  {
    cod: "980",
  },
  {
    cod: "973",
  },
  {
    cod: "997",
  },
  {
    cod: "VC95081",
  },
  {
    cod: "68841L",
  },
  {
    cod: "68841A",
  },
  {
    cod: "68841R",
  },
  {
    cod: "68841V",
  },
  {
    cod: "BP26101",
  },
  {
    cod: "BP01101",
  },
  {
    cod: "BP02101",
  },
  {
    cod: "11002001",
  },
  {
    cod: "BP26001",
  },
  {
    cod: "BP26003",
  },
  {
    cod: "BP01001",
  },
  {
    cod: "GLOBTIK",
  },
  {
    cod: "95448",
  },
  {
    cod: "GLOBOPVE",
  },
  {
    cod: "SET04",
  },
  {
    cod: "CAJACM",
  },
  {
    cod: "CAJAROCK",
  },
  {
    cod: "M2844",
  },
  {
    cod: "M2486",
  },
  {
    cod: "M2613",
  },
  {
    cod: "M60",
  },
  {
    cod: "M154",
  },
  {
    cod: "M2024",
  },
  {
    cod: "MK2846",
  },
  {
    cod: "610954",
  },
  {
    cod: "610952",
  },
  {
    cod: "610950",
  },
  {
    cod: "610949",
  },
  {
    cod: "610948",
  },
  {
    cod: "BOTI046B",
  },
  {
    cod: "BOTI047B",
  },
  {
    cod: "P10ANIM",
  },
  {
    cod: "4092557",
  },
  {
    cod: "CAJAROCKBYN",
  },
  {
    cod: "CAJACM20",
  },
  {
    cod: "CAJARBYN20",
  },
  {
    cod: "CAJACC15",
  },
  {
    cod: "KINGSPFW",
  },
  {
    cod: "48051",
  },
  {
    cod: "536R",
  },
  {
    cod: "536L",
  },
  {
    cod: "536V",
  },
  {
    cod: "540R",
  },
  {
    cod: "540L",
  },
  {
    cod: "540V",
  },
  {
    cod: "MK74",
  },
  {
    cod: "MK2688",
  },
  {
    cod: "MK2508",
  },
  {
    cod: "SPCOLAC",
  },
  {
    cod: "SPCUP",
  },
  {
    cod: "P1505",
  },
  {
    cod: "SPESTMAR",
  },
  {
    cod: "P1482",
  },
  {
    cod: "SPGOTA",
  },
  {
    cod: "SPUNIC",
  },
  {
    cod: "SPPINA",
  },
  {
    cod: "SPCOLAR",
  },
  {
    cod: "MK93",
  },
  {
    cod: "PION6I",
  },
  {
    cod: "16741",
  },
  {
    cod: "15888",
  },
  {
    cod: "16246",
  },
  {
    cod: "17146",
  },
  {
    cod: "16263",
  },
  {
    cod: "15894",
  },
  {
    cod: "17149",
  },
  {
    cod: "19140",
  },
  {
    cod: "19139",
  },
  {
    cod: "19167",
  },
  {
    cod: "REPFRA31",
  },
  {
    cod: "REPFRA32",
  },
  {
    cod: "CH0165X500",
  },
  {
    cod: "F530X500",
  },
  {
    cod: "PBOMBCR",
  },
  {
    cod: "PBOMTANM",
  },
  {
    cod: "7502LP",
  },
  {
    cod: "7502AP",
  },
  {
    cod: "7502VP",
  },
  {
    cod: "7502CP",
  },
  {
    cod: "503LP",
  },
  {
    cod: "503AP",
  },
  {
    cod: "503VP",
  },
  {
    cod: "SPCN",
  },
  {
    cod: "SPSCR",
  },
  {
    cod: "RC1",
  },
  {
    cod: "BBM30X5",
  },
  {
    cod: "B2525",
  },
  {
    cod: "SOLMC30",
  },
  {
    cod: "BA40RD",
  },
  {
    cod: "BA45RD",
  },
  {
    cod: "BA50RD",
  },
  {
    cod: "BA55RD",
  },
  {
    cod: "BA60RD",
  },
  {
    cod: "BA30CD",
  },
  {
    cod: "BA35CD",
  },
  {
    cod: "BA40CD",
  },
  {
    cod: "BA55CD",
  },
  {
    cod: "BA60CD",
  },
  {
    cod: "BA35X45",
  },
  {
    cod: "BA40X50",
  },
  {
    cod: "BA40X60",
  },
  {
    cod: "BOTI015B",
  },
  {
    cod: "601600",
  },
  {
    cod: "DBA50",
  },
  {
    cod: "DGL50",
  },
  {
    cod: "DPI50",
  },
  {
    cod: "DCU50",
  },
  {
    cod: "DFR50",
  },
  {
    cod: "DPA50",
  },
  {
    cod: "DAM50",
  },
  {
    cod: "DPR50",
  },
  {
    cod: "DFRO50",
  },
  {
    cod: "DVE50",
  },
  {
    cod: "DDO50",
  },
  {
    cod: "DFL40",
  },
  {
    cod: "DTR40",
  },
  {
    cod: "DSI40",
  },
  {
    cod: "DFM40",
  },
  {
    cod: "DCU40",
  },
  {
    cod: "DDI40",
  },
  {
    cod: "BBF500",
  },
  {
    cod: "CSFCV",
  },
  {
    cod: "CSCCV",
  },
  {
    cod: "CDCV",
  },
  {
    cod: "LI0101",
  },
  {
    cod: "ME0101",
  },
  {
    cod: "BL7001",
  },
  {
    cod: "4093190",
  },
  {
    cod: "300163",
  },
  {
    cod: "300187",
  },
  {
    cod: "300200",
  },
  {
    cod: "300146",
  },
  {
    cod: "300184",
  },
  {
    cod: "300207",
  },
  {
    cod: "300245",
  },
  {
    cod: "EMUB",
  },
  {
    cod: "EMUBL",
  },
  {
    cod: "EMUBV",
  },
  {
    cod: "EMUBSD",
  },
  {
    cod: "EMUCH",
  },
  {
    cod: "EMUCS",
  },
  {
    cod: "EXTVI",
  },
  {
    cod: "EMUC",
  },
  {
    cod: "EMUCO",
  },
  {
    cod: "EMUCC",
  },
  {
    cod: "EMUHA",
  },
  {
    cod: "EMUKS",
  },
  {
    cod: "EMULM",
  },
  {
    cod: "EMULE",
  },
  {
    cod: "EMUM",
  },
  {
    cod: "EMUO",
  },
  {
    cod: "EMUP",
  },
  {
    cod: "EMUCCO",
  },
  {
    cod: "EMUR",
  },
  {
    cod: "EMURV",
  },
  {
    cod: "EMURU",
  },
  {
    cod: "EMUST",
  },
  {
    cod: "EMUAK",
  },
  {
    cod: "EMUMC",
  },
  {
    cod: "DDLRH",
  },
  {
    cod: "DDLFH",
  },
  {
    cod: "300221",
  },
  {
    cod: "323236",
  },
  {
    cod: "332320",
  },
  {
    cod: "42075N",
  },
  {
    cod: "42075V",
  },
  {
    cod: "42075L",
  },
  {
    cod: "5435A",
  },
  {
    cod: "5435AM",
  },
  {
    cod: "5435V",
  },
  {
    cod: "5435VE",
  },
  {
    cod: "15085",
  },
  {
    cod: "MTARXL",
  },
  {
    cod: "DONUTSV+DIV",
  },
  {
    cod: "PBBLN",
  },
  {
    cod: "1245C",
  },
  {
    cod: "245CSC",
  },
  {
    cod: "245CSL",
  },
  {
    cod: "245CSR",
  },
  {
    cod: "1245V",
  },
  {
    cod: "1245L",
  },
  {
    cod: "1245R",
  },
  {
    cod: "CRX500",
  },
  {
    cod: "KLB15",
  },
  {
    cod: "KLLB15",
  },
  {
    cod: "KLW15",
  },
  {
    cod: "KLBL15",
  },
  {
    cod: "KLGD15",
  },
  {
    cod: "KLM15",
  },
  {
    cod: "KLNV15",
  },
  {
    cod: "KLR15",
  },
  {
    cod: "I21100",
  },
  {
    cod: "I21101",
  },
  {
    cod: "80216",
  },
  {
    cod: "80217",
  },
  {
    cod: "CANDY13",
  },
  {
    cod: "COLCA",
  },
  {
    cod: "SECI",
  },
  {
    cod: "I21200",
  },
  {
    cod: "BV25F",
  },
  {
    cod: "BBM205",
  },
  {
    cod: "I21201",
  },
  {
    cod: "I21202",
  },
  {
    cod: "I21203",
  },
  {
    cod: "I21204",
  },
  {
    cod: "I21205",
  },
  {
    cod: "I21300",
  },
  {
    cod: "I21301",
  },
  {
    cod: "I21302",
  },
  {
    cod: "I21304",
  },
  {
    cod: "I21308",
  },
  {
    cod: "I21307",
  },
  {
    cod: "I21310",
  },
  {
    cod: "I21312",
  },
  {
    cod: "I21313",
  },
  {
    cod: "I21314",
  },
  {
    cod: "I21315",
  },
  {
    cod: "I21316",
  },
  {
    cod: "I21317",
  },
  {
    cod: "I21318",
  },
  {
    cod: "I21319",
  },
  {
    cod: "I21320",
  },
  {
    cod: "I21400",
  },
  {
    cod: "I21402",
  },
  {
    cod: "I21403",
  },
  {
    cod: "I21404",
  },
  {
    cod: "I21405",
  },
  {
    cod: "I21305",
  },
  {
    cod: "318713",
  },
  {
    cod: "12754",
  },
  {
    cod: "236",
  },
  {
    cod: "12882",
  },
  {
    cod: "SP26",
  },
  {
    cod: "SP33",
  },
  {
    cod: "SP9",
  },
  {
    cod: "SP25",
  },
  {
    cod: "SP12",
  },
  {
    cod: "SP21",
  },
  {
    cod: "SP24",
  },
  {
    cod: "SP7",
  },
  {
    cod: "SP18",
  },
  {
    cod: "SP22",
  },
  {
    cod: "SP23",
  },
  {
    cod: "SP10",
  },
  {
    cod: "SP20",
  },
  {
    cod: "SP16",
  },
  {
    cod: "SP14",
  },
  {
    cod: "SP19",
  },
  {
    cod: "SP11",
  },
  {
    cod: "SP5",
  },
  {
    cod: "SP31",
  },
  {
    cod: "SP2",
  },
  {
    cod: "SP8",
  },
  {
    cod: "SP32",
  },
  {
    cod: "SP13",
  },
  {
    cod: "SP28",
  },
  {
    cod: "SP35",
  },
  {
    cod: "SP34",
  },
  {
    cod: "SP4",
  },
  {
    cod: "SP36",
  },
  {
    cod: "SP3",
  },
  {
    cod: "SP27",
  },
  {
    cod: "SP6",
  },
  {
    cod: "SP15",
  },
  {
    cod: "SP29",
  },
  {
    cod: "SP30",
  },
  {
    cod: "OS100",
  },
  {
    cod: "OS300",
  },
  {
    cod: "OB100",
  },
  {
    cod: "OB300",
  },
  {
    cod: "OM100",
  },
  {
    cod: "OM300",
  },
  {
    cod: "OL100",
  },
  {
    cod: "OL300",
  },
  {
    cod: "KIEV20",
  },
  {
    cod: "401408",
  },
  {
    cod: "15602",
  },
  {
    cod: "106421",
  },
  {
    cod: "I21206",
  },
  {
    cod: "11002002",
  },
  {
    cod: "I21500B",
  },
  {
    cod: "I21501B",
  },
  {
    cod: "I21502B",
  },
  {
    cod: "I21503B",
  },
  {
    cod: "KLRO15",
  },
  {
    cod: "ADC",
  },
  {
    cod: "F2324",
  },
  {
    cod: "F1920",
  },
  {
    cod: "F1516",
  },
  {
    cod: "F2122",
  },
  {
    cod: "F1718",
  },
  {
    cod: "F12",
  },
  {
    cod: "F1314",
  },
  {
    cod: "F910",
  },
  {
    cod: "F5152",
  },
  {
    cod: "F4142",
  },
  {
    cod: "F34",
  },
  {
    cod: "F3738",
  },
  {
    cod: "F1112",
  },
  {
    cod: "AL500",
  },
  {
    cod: "MCHAL",
  },
  {
    cod: "EMUPT",
  },
  {
    cod: "112303349",
  },
  {
    cod: "112303345",
  },
  {
    cod: "112303346",
  },
  {
    cod: "GBCP",
  },
  {
    cod: "DBAM30",
  },
  {
    cod: "4753",
  },
  {
    cod: "ACE18",
  },
  {
    cod: "503RP",
  },
  {
    cod: "46041",
  },
  {
    cod: "46044",
  },
  {
    cod: "46029",
  },
  {
    cod: "MK2509",
  },
  {
    cod: "TFCCP",
  },
  {
    cod: "TFCHEP",
  },
  {
    cod: "TFCHCP",
  },
  {
    cod: "TFCGP",
  },
  {
    cod: "THBP",
  },
  {
    cod: "TFCHP",
  },
  {
    cod: "HWR20",
  },
  {
    cod: "HWB20",
  },
  {
    cod: "SIN26",
  },
  {
    cod: "SPHP",
  },
  {
    cod: "SPNET",
  },
  {
    cod: "SPDIN",
  },
  {
    cod: "SPCAR",
  },
  {
    cod: "SPSIR",
  },
  {
    cod: "SPCK",
  },
  {
    cod: "SPHA",
  },
  {
    cod: "SPMAR",
  },
  {
    cod: "SPFRO",
  },
  {
    cod: "SPUNI",
  },
  {
    cod: "2022",
  },
  {
    cod: "BOTI050B",
  },
  {
    cod: "20056809",
  },
  {
    cod: "23159A",
  },
  {
    cod: "23159R",
  },
  {
    cod: "S125",
  },
  {
    cod: "S3170",
  },
  {
    cod: "S3219",
  },
  {
    cod: "S515",
  },
  {
    cod: "S1209",
  },
  {
    cod: "S1239",
  },
  {
    cod: "S1260",
  },
  {
    cod: "S1265",
  },
  {
    cod: "S1266",
  },
  {
    cod: "CYHAL",
  },
  {
    cod: "LCA",
  },
  {
    cod: "42168800",
  },
  {
    cod: "GLF12",
  },
  {
    cod: "GLF13",
  },
  {
    cod: "GLF14",
  },
  {
    cod: "GLF15",
  },
  {
    cod: "I21407",
  },
  {
    cod: "I21321",
  },
  {
    cod: "I21322",
  },
  {
    cod: "I21323",
  },
  {
    cod: "D6130",
  },
  {
    cod: "D6131",
  },
  {
    cod: "D6132",
  },
  {
    cod: "I21504B",
  },
  {
    cod: "I21505B",
  },
  {
    cod: "I21506B",
  },
  {
    cod: "I21507B",
  },
  {
    cod: "I21508B",
  },
  {
    cod: "I21509B",
  },
  {
    cod: "TDHMPC",
  },
  {
    cod: "TDCMPC",
  },
  {
    cod: "I21408",
  },
  {
    cod: "I21324",
  },
  {
    cod: "I21325",
  },
  {
    cod: "I21326",
  },
  {
    cod: "P107",
  },
  {
    cod: "P140",
  },
  {
    cod: "CY18",
  },
  {
    cod: "CY11",
  },
  {
    cod: "PANDULCE100RL",
  },
  {
    cod: "PANDULCE100PNC",
  },
  {
    cod: "PANDULCE100CA",
  },
  {
    cod: "PANDULCE100BR",
  },
  {
    cod: "PANDULCE250CA",
  },
  {
    cod: "PANDULCE250PNC",
  },
  {
    cod: "PANDULCE250BR",
  },
  {
    cod: "PANDULCE500BR",
  },
  {
    cod: "PANDULCE500PNC",
  },
  {
    cod: "PANDULCE500CA",
  },
  {
    cod: "PANDULCE1000BR",
  },
  {
    cod: "PANDULCE1000PNC",
  },
  {
    cod: "PANDULCE1000CA",
  },
  {
    cod: "P10LFV",
  },
  {
    cod: "EMUQC",
  },
  {
    cod: "EMUAP",
  },
  {
    cod: "EMUMM",
  },
  {
    cod: "EMULB",
  },
  {
    cod: "342135",
  },
  {
    cod: "342333",
  },
  {
    cod: "SPLST",
  },
  {
    cod: "SPMIN",
  },
  {
    cod: "STREN",
  },
  {
    cod: "STARN",
  },
  {
    cod: "STMJE",
  },
  {
    cod: "BB24",
  },
  {
    cod: "BV25A",
  },
  {
    cod: "B25ANE",
  },
  {
    cod: "B25HC",
  },
  {
    cod: "B25HS",
  },
  {
    cod: "B25HM",
  },
  {
    cod: "B25HVM",
  },
  {
    cod: "DBUDB",
  },
  {
    cod: "MK1460",
  },
  {
    cod: "SPNAV",
  },
  {
    cod: "SOLP05",
  },
  {
    cod: "I21410",
  },
  {
    cod: "I21327",
  },
  {
    cod: "I21328",
  },
  {
    cod: "I21329",
  },
  {
    cod: "I21332",
  },
  {
    cod: "BR0004",
  },
  {
    cod: "BOTI040B",
  },
  {
    cod: "BOTI039B",
  },
  {
    cod: "I21336",
  },
  {
    cod: "I21338",
  },
  {
    cod: "I21413",
  },
  {
    cod: "I21339",
  },
  {
    cod: "I21340",
  },
  {
    cod: "I21341",
  },
  {
    cod: "I21342",
  },
  {
    cod: "I21344",
  },
  {
    cod: "I21414",
  },
  {
    cod: "MFAP",
  },
  {
    cod: "I21345",
  },
  {
    cod: "LIPOABET",
  },
  {
    cod: "BCE32",
  },
  {
    cod: "I21415",
  },
  {
    cod: "I21416",
  },
  {
    cod: "I21417",
  },
  {
    cod: "I21419",
  },
  {
    cod: "I21348",
  },
  {
    cod: "I21350",
  },
  {
    cod: "I21351",
  },
  {
    cod: "I21352",
  },
  {
    cod: "I21353",
  },
  {
    cod: "I21355",
  },
  {
    cod: "I21356",
  },
  {
    cod: "I21357",
  },
  {
    cod: "I21358",
  },
  {
    cod: "BOTI051B",
  },
  {
    cod: "BOTI052B",
  },
  {
    cod: "BOTI053B",
  },
  {
    cod: "BOTI054B",
  },
  {
    cod: "CH0539",
  },
  {
    cod: "CH0537",
  },
  {
    cod: "I21359",
  },
  {
    cod: "241012",
  },
  {
    cod: "43293",
  },
  {
    cod: "43294",
  },
  {
    cod: "DNBCA",
  },
  {
    cod: "DNDR",
  },
  {
    cod: "DCOR",
  },
  {
    cod: "DRGO",
  },
  {
    cod: "MTVP",
  },
  {
    cod: "MTVD",
  },
  {
    cod: "KFDIB",
  },
  {
    cod: "KDPBG",
  },
  {
    cod: "KFDSB",
  },
  {
    cod: "KINGAG",
  },
  {
    cod: "CBNR",
  },
  {
    cod: "CBNV",
  },
  {
    cod: "BMND",
  },
  {
    cod: "VPMN",
  },
  {
    cod: "I21526",
  },
  {
    cod: "TRFCHC",
  },
  {
    cod: "TRFCHE",
  },
  {
    cod: "TRFCC",
  },
  {
    cod: "TFCHR",
  },
  {
    cod: "TRFCG",
  },
  {
    cod: "TRH",
  },
  {
    cod: "TAGNAV",
  },
  {
    cod: "TAGFD",
  },
  {
    cod: "TAGFC",
  },
  {
    cod: "F01O",
  },
  {
    cod: "F02O",
  },
  {
    cod: "F02MTART",
  },
  {
    cod: "5195",
  },
  {
    cod: "F01CHEES",
  },
  {
    cod: "107440",
  },
  {
    cod: "MTVB",
  },
  {
    cod: "MTVRP",
  },
  {
    cod: "R103048",
  },
  {
    cod: "R103047",
  },
  {
    cod: "I21528",
  },
  {
    cod: "SPMN",
  },
  {
    cod: "SPPNR",
  },
  {
    cod: "SPPNG",
  },
  {
    cod: "SPAN",
  },
  {
    cod: "DBUDC",
  },
  {
    cod: "HACP",
  },
  {
    cod: "TC2112",
  },
  {
    cod: "TC2113",
  },
  {
    cod: "TC2115",
  },
  {
    cod: "TC2114",
  },
  {
    cod: "7570",
  },
  {
    cod: "N8752026",
  },
  {
    cod: "AXM5",
  },
  {
    cod: "DECOMN",
  },
  {
    cod: "DECOBN",
  },
  {
    cod: "DECOBO",
  },
  {
    cod: "DECORN",
  },
  {
    cod: "DECOHJ",
  },
  {
    cod: "DECOBA",
  },
  {
    cod: "DPCM",
  },
  {
    cod: "DPMRC",
  },
  {
    cod: "DECOBR",
  },
  {
    cod: "DECOMD",
  },
  {
    cod: "DPPRO",
  },
  {
    cod: "DECOMP",
  },
  {
    cod: "DECOMF",
  },
  {
    cod: "DECORG",
  },
  {
    cod: "DPPC",
  },
  {
    cod: "DECOPB",
  },
  {
    cod: "DECOPA",
  },
  {
    cod: "DECOPL",
  },
  {
    cod: "DECOPD",
  },
  {
    cod: "DECOLI",
  },
  {
    cod: "DECOPC",
  },
  {
    cod: "DPSRC",
  },
  {
    cod: "DECOML",
  },
  {
    cod: "DNBRVD",
  },
  {
    cod: "DNRVD",
  },
  {
    cod: "68834V",
  },
  {
    cod: "68834C",
  },
  {
    cod: "68834L",
  },
  {
    cod: "68842V",
  },
  {
    cod: "68842C",
  },
  {
    cod: "68842L",
  },
  {
    cod: "68843V",
  },
  {
    cod: "68843C",
  },
  {
    cod: "68843R",
  },
  {
    cod: "68844C",
  },
  {
    cod: "68844V",
  },
  {
    cod: "68845V",
  },
  {
    cod: "68845R",
  },
  {
    cod: "68845C",
  },
  {
    cod: "68848C",
  },
  {
    cod: "68848L",
  },
  {
    cod: "68848V",
  },
  {
    cod: "68853V",
  },
  {
    cod: "68853L",
  },
  {
    cod: "68853R",
  },
  {
    cod: "68853C",
  },
  {
    cod: "68852V",
  },
  {
    cod: "68852C",
  },
  {
    cod: "68852R",
  },
  {
    cod: "68852L",
  },
  {
    cod: "68852S",
  },
  {
    cod: "68852M",
  },
  {
    cod: "68847V",
  },
  {
    cod: "COA717",
  },
  {
    cod: "CHIP19",
  },
  {
    cod: "PUNZ16",
  },
  {
    cod: "I21360",
  },
  {
    cod: "I21361",
  },
  {
    cod: "I21362",
  },
  {
    cod: "I21363",
  },
  {
    cod: "I21365",
  },
  {
    cod: "I21366",
  },
  {
    cod: "I21367",
  },
  {
    cod: "I21421",
  },
  {
    cod: "DECOFL",
  },
  {
    cod: "DECODM",
  },
  {
    cod: "DECOCA",
  },
  {
    cod: "DECORO",
  },
  {
    cod: "DECODI",
  },
  {
    cod: "DECOAR",
  },
  {
    cod: "DMVIO",
  },
  {
    cod: "DMVE",
  },
  {
    cod: "DMRO",
  },
  {
    cod: "DMAZ",
  },
  {
    cod: "DPPAQ",
  },
  {
    cod: "DPPVM",
  },
  {
    cod: "DPPRB",
  },
  {
    cod: "PASTE1222",
  },
  {
    cod: "PASTE1260",
  },
  {
    cod: "PASTE1277",
  },
  {
    cod: "PASTE1284",
  },
  {
    cod: "1291",
  },
  {
    cod: "44014",
  },
  {
    cod: "21107L",
  },
  {
    cod: "MALH",
  },
  {
    cod: "5410V",
  },
  {
    cod: "5410R",
  },
  {
    cod: "77301R",
  },
  {
    cod: "77301C",
  },
  {
    cod: "77301V",
  },
  {
    cod: "77301L",
  },
  {
    cod: "77301N",
  },
  {
    cod: "BAM02",
  },
  {
    cod: "BAM03",
  },
  {
    cod: "BAM01",
  },
  {
    cod: "MAH02P",
  },
  {
    cod: "MAV65",
  },
  {
    cod: "BAMP03",
  },
  {
    cod: "BAMP02",
  },
  {
    cod: "BAMP01",
  },
  {
    cod: "BP01002",
  },
  {
    cod: "BP01003",
  },
  {
    cod: "BP01004",
  },
  {
    cod: "BP01005",
  },
  {
    cod: "BP26004",
  },
  {
    cod: "BP26006",
  },
  {
    cod: "BP26007",
  },
  {
    cod: "GXAN1",
  },
  {
    cod: "CHIP01",
  },
  {
    cod: "113CA",
  },
  {
    cod: "97803",
  },
  {
    cod: "BR3832",
  },
  {
    cod: "34223",
  },
  {
    cod: "34233",
  },
  {
    cod: "793CA",
  },
  {
    cod: "1321",
  },
  {
    cod: "1338",
  },
  {
    cod: "951",
  },
  {
    cod: "952",
  },
  {
    cod: "953",
  },
  {
    cod: "COC1",
  },
  {
    cod: "COC2",
  },
  {
    cod: "COFC",
  },
  {
    cod: "114CA",
  },
  {
    cod: "122CA",
  },
  {
    cod: "VC9508",
  },
  {
    cod: "BAR10",
  },
  {
    cod: "BAR06",
  },
  {
    cod: "BOTI55B",
  },
  {
    cod: "HAX300",
  },
  {
    cod: "BCR5",
  },
  {
    cod: "VSTX39",
  },
  {
    cod: "BRM11",
  },
  {
    cod: "BRX3",
  },
  {
    cod: "VTO 22/03/22",
  },
  {
    cod: "48869",
  },
  {
    cod: "15894A",
  },
  {
    cod: "TAGPA",
  },
  {
    cod: "TAGPAR",
  },
  {
    cod: "TAGFDC",
  },
  {
    cod: "O01MH2",
  },
  {
    cod: "O02MH2",
  },
  {
    cod: "O03MH2",
  },
  {
    cod: "O04MH2",
  },
  {
    cod: "O01H1",
  },
  {
    cod: "O02H1",
  },
  {
    cod: "O03H1",
  },
  {
    cod: "O04H1",
  },
  {
    cod: "CANDYP",
  },
  {
    cod: "AVEP",
  },
  {
    cod: "CSSR",
  },
  {
    cod: "CSSN",
  },
  {
    cod: "CSSD",
  },
  {
    cod: "CSSP",
  },
  {
    cod: "TFCCDC",
  },
  {
    cod: "TFCCNC",
  },
  {
    cod: "TFCCPC",
  },
  {
    cod: "CMVI",
  },
  {
    cod: "TSMIRG",
  },
  {
    cod: "TSMIP",
  },
  {
    cod: "TSMID",
  },
  {
    cod: "TFCCRG",
  },
  {
    cod: "10481P",
  },
  {
    cod: "TULBPR50",
  },
  {
    cod: "TULAP50",
  },
  {
    cod: "TULAM50",
  },
  {
    cod: "TULAQP50",
  },
  {
    cod: "TULAZ50",
  },
  {
    cod: "TULB50",
  },
  {
    cod: "TULCE50",
  },
  {
    cod: "TULF50",
  },
  {
    cod: "TULM50",
  },
  {
    cod: "TULNA50",
  },
  {
    cod: "TULNE50",
  },
  {
    cod: "TULP50",
  },
  {
    cod: "TULRO",
  },
  {
    cod: "TULR",
  },
  {
    cod: "TULV",
  },
  {
    cod: "TULVP50",
  },
  {
    cod: "TULV50",
  },
  {
    cod: "TULCP50",
  },
  {
    cod: "TULRP",
  },
  {
    cod: "KITBOTI",
  },
  {
    cod: "CAJA23x16K",
  },
  {
    cod: "CAJA16.5K",
  },
  {
    cod: "CAJA18x15K",
  },
  {
    cod: "CAJARPFP",
  },
  {
    cod: "CAJA17x17x20",
  },
  {
    cod: "CAJA12x12x16",
  },
  {
    cod: "PPFAM5",
  },
  {
    cod: "REP2018",
  },
  {
    cod: "CANDY14",
  },
  {
    cod: "511",
  },
  {
    cod: "PHPB2",
  },
  {
    cod: "PCLFRO",
  },
  {
    cod: "VFIES",
  },
  {
    cod: "VRETRO",
  },
  {
    cod: "793.7CA",
  },
  {
    cod: "DMUFFL",
  },
  {
    cod: "DBUDL",
  },
  {
    cod: "DPANQ",
  },
  {
    cod: "GRA500",
  },
  {
    cod: "131CA05",
  },
  {
    cod: "ENVC",
  },
  {
    cod: "DRAIP",
  },
  {
    cod: "M2846",
  },
  {
    cod: "C537",
  },
  {
    cod: "TM15D",
  },
  {
    cod: "T15D",
  },
  {
    cod: "TBD",
  },
  {
    cod: "TTAD",
  },
  {
    cod: "TLD",
  },
  {
    cod: "10303T",
  },
  {
    cod: "10303D",
  },
  {
    cod: "ASP50",
  },
  {
    cod: "ALP50",
  },
  {
    cod: "AVP50",
  },
  {
    cod: "ABLA50",
  },
  {
    cod: "AFUC50",
  },
  {
    cod: "PINL2",
  },
  {
    cod: "PINL6",
  },
  {
    cod: "PINL10",
  },
  {
    cod: "PINL12",
  },
  {
    cod: "PINL8",
  },
  {
    cod: "PINL4",
  },
  {
    cod: "404100",
  },
  {
    cod: "BP01020",
  },
  {
    cod: "BP01021",
  },
  {
    cod: "3886C",
  },
  {
    cod: "3886V",
  },
  {
    cod: "3886R",
  },
  {
    cod: "3893R",
  },
  {
    cod: "3893V",
  },
  {
    cod: "3893C",
  },
  {
    cod: "3893L",
  },
  {
    cod: "3894L",
  },
  {
    cod: "3894C",
  },
  {
    cod: "3894V",
  },
  {
    cod: "3895V",
  },
  {
    cod: "3895C",
  },
  {
    cod: "3895R",
  },
  {
    cod: "3895L",
  },
  {
    cod: "PUN131",
  },
  {
    cod: "FDP1201",
  },
  {
    cod: "FDP1202",
  },
  {
    cod: "FDPR1201",
  },
  {
    cod: "FDPR1202",
  },
  {
    cod: "610-314",
  },
  {
    cod: "402-1",
  },
  {
    cod: "HA300",
  },
  {
    cod: "GUIAPA",
  },
  {
    cod: "PCC6",
  },
  {
    cod: "PCE6",
  },
  {
    cod: "PCR6",
  },
  {
    cod: "VC1750",
  },
  {
    cod: "VC1742",
  },
  {
    cod: "813775",
  },
  {
    cod: "813782",
  },
  {
    cod: "813799",
  },
  {
    cod: "40999",
  },
  {
    cod: "SWEETARA",
  },
  {
    cod: "6033",
  },
  {
    cod: "AZI01A",
  },
  {
    cod: "BMBD2",
  },
  {
    cod: "B25HDN",
  },
  {
    cod: "B25MII",
  },
  {
    cod: "BV30A",
  },
  {
    cod: "B30HC",
  },
  {
    cod: "10303G",
  },
  {
    cod: "106040",
  },
  {
    cod: "F04MTART",
  },
  {
    cod: "PC500",
  },
  {
    cod: "COB03",
  },
  {
    cod: "FC0051",
  },
  {
    cod: "1413",
  },
  {
    cod: "KLFR15",
  },
  {
    cod: "PMOUC",
  },
  {
    cod: "28863",
  },
  {
    cod: "28862",
  },
  {
    cod: "34233A",
  },
  {
    cod: "80062",
  },
  {
    cod: "80055",
  },
  {
    cod: "PHOR1",
  },
  {
    cod: "AD0174",
  },
  {
    cod: "COPREM",
  },
  {
    cod: "MAPCOR",
  },
  {
    cod: "C",
  },
  {
    cod: "a",
  },
  {
    cod: "P1468",
  },
  {
    cod: "P1475",
  },
  {
    cod: "P1499",
  },
  {
    cod: "P128",
  },
  {
    cod: "P1529",
  },
  {
    cod: "P1536",
  },
  {
    cod: "P1574",
  },
  {
    cod: "P1598",
  },
  {
    cod: "P1604",
  },
  {
    cod: "128143",
  },
  {
    cod: "128144",
  },
  {
    cod: "8147VP",
  },
  {
    cod: "8147LP",
  },
  {
    cod: "8147RP",
  },
  {
    cod: "8147CP",
  },
  {
    cod: "Y",
  },
  {
    cod: "128153",
  },
  {
    cod: "VTFGR",
  },
  {
    cod: "VTFMA",
  },
  {
    cod: "VTFVM",
  },
  {
    cod: "VTFAZ",
  },
  {
    cod: "CCTS",
  },
  {
    cod: "MIXPR2",
  },
  {
    cod: "B30HDN",
  },
  {
    cod: "AGUILA",
  },
  {
    cod: "DMV400",
  },
  {
    cod: "PBC400",
  },
  {
    cod: "MIXPA2",
  },
  {
    cod: "PUMJ2",
  },
  {
    cod: "DBIZCC",
  },
  {
    cod: "4072",
  },
  {
    cod: "4075",
  },
  {
    cod: "CDL18",
  },
  {
    cod: "MARHR",
  },
  {
    cod: "QMAC2",
  },
  {
    cod: "CAKEPOP",
  },
  {
    cod: "BOTI037B",
  },
  {
    cod: "BOTI038B",
  },
  {
    cod: "BOTI042B",
  },
  {
    cod: "BOTI041B",
  },
  {
    cod: "CPMEM",
  },
  {
    cod: "CPKIN",
  },
  {
    cod: "PCUCUR",
  },
  {
    cod: "PPALE",
  },
  {
    cod: "PPERRO",
  },
  {
    cod: "BOTI043B",
  },
  {
    cod: "BOTI044B",
  },
  {
    cod: "SICO257",
  },
  {
    cod: "SICO295",
  },
  {
    cod: "S3206.1",
  },
  {
    cod: "S619",
  },
  {
    cod: "MTROQ",
  },
  {
    cod: "MMIXT",
  },
  {
    cod: "950755",
  },
  {
    cod: "44015",
  },
  {
    cod: "77302C",
  },
  {
    cod: "77302V",
  },
  {
    cod: "77302R",
  },
  {
    cod: "77302L",
  },
  {
    cod: "BOTI060B",
  },
  {
    cod: "K",
  },
  {
    cod: "TFFL",
  },
  {
    cod: "TFFF",
  },
  {
    cod: "TFFA",
  },
  {
    cod: "TFFR",
  },
  {
    cod: "TFFAQ",
  },
  {
    cod: "TFFC",
  },
  {
    cod: "TFFM",
  },
  {
    cod: "TFFD",
  },
  {
    cod: "TFFMA",
  },
  {
    cod: "TFFRG",
  },
  {
    cod: "TFFP",
  },
  {
    cod: "TFFLM",
  },
  {
    cod: "TFFDM",
  },
  {
    cod: "TFFNE",
  },
  {
    cod: "TM15RG",
  },
  {
    cod: "TM15M",
  },
  {
    cod: "TM15N",
  },
  {
    cod: "TM15DM",
  },
  {
    cod: "TM15P",
  },
  {
    cod: "TM18A",
  },
  {
    cod: "TM18D",
  },
  {
    cod: "TM18N",
  },
  {
    cod: "TM18AM",
  },
  {
    cod: "TM40A",
  },
  {
    cod: "TM50P",
  },
  {
    cod: "TM50C",
  },
  {
    cod: "TM50DM",
  },
  {
    cod: "TM50M",
  },
  {
    cod: "TM50L",
  },
  {
    cod: "TMCD",
  },
  {
    cod: "TMBP",
  },
  {
    cod: "TMBC",
  },
  {
    cod: "TMBR",
  },
  {
    cod: "TFCRA",
  },
  {
    cod: "TFCRP",
  },
  {
    cod: "TFCRM",
  },
  {
    cod: "TFCRDM",
  },
  {
    cod: "TFCRC",
  },
  {
    cod: "TFCHRG",
  },
  {
    cod: "TFCHPM",
  },
  {
    cod: "TFCCPM",
  },
  {
    cod: "TFCCDM",
  },
  {
    cod: "TFCHDM",
  },
  {
    cod: "TFMR",
  },
  {
    cod: "TFMA",
  },
  {
    cod: "TFMM",
  },
  {
    cod: "TFMPM",
  },
  {
    cod: "TFMDM",
  },
  {
    cod: "TFCMR",
  },
  {
    cod: "TFCMA",
  },
  {
    cod: "TFCMC",
  },
  {
    cod: "TFCMN",
  },
  {
    cod: "TFCMP",
  },
  {
    cod: "BBRF20",
  },
  {
    cod: "BBRF22",
  },
  {
    cod: "BBRF24",
  },
  {
    cod: "BBRF26",
  },
  {
    cod: "BBRF29",
  },
  {
    cod: "BF2940",
  },
  {
    cod: "P1307",
  },
  {
    cod: "SHCM",
  },
  {
    cod: "SMNRD",
  },
  {
    cod: "SSBM",
  },
  {
    cod: "SBAYA",
  },
  {
    cod: "SRRB",
  },
  {
    cod: "SPPS",
  },
  {
    cod: "SASS",
  },
  {
    cod: "SCPP",
  },
  {
    cod: "SCAD",
  },
  {
    cod: "SDIN",
  },
  {
    cod: "SNYN",
  },
  {
    cod: "STTK",
  },
  {
    cod: "SMCO",
  },
  {
    cod: "SUAR",
  },
  {
    cod: "SUNIC",
  },
  {
    cod: "SFCL",
  },
  {
    cod: "SRZR",
  },
  {
    cod: "SFCC",
  },
  {
    cod: "STCVD",
  },
  {
    cod: "SNBBO",
  },
  {
    cod: "SMRO",
  },
  {
    cod: "SAVA",
  },
  {
    cod: "SLYP",
  },
  {
    cod: "SLFVD",
  },
  {
    cod: "FCPAC",
  },
  {
    cod: "DCM04",
  },
  {
    cod: "DCM01",
  },
  {
    cod: "PCM10",
  },
  {
    cod: "RCM15",
  },
  {
    cod: "SPCCB",
  },
  {
    cod: "PCRGP",
  },
  {
    cod: "PCAGP",
  },
  {
    cod: "PCAZGP",
  },
  {
    cod: "PCVGP",
  },
  {
    cod: "PCFGP",
  },
  {
    cod: "PCNAGP",
  },
  {
    cod: "PCVIGP",
  },
  {
    cod: "CO1201",
  },
  {
    cod: "COM01",
  },
  {
    cod: "CAPBRE",
  },
  {
    cod: "TFX100",
  },
  {
    cod: "MMRL",
  },
  {
    cod: "PUN131",
  },
  {
    cod: "CCHALL",
  },
  {
    cod: "CCHH",
  },
  {
    cod: "MERDIN",
  },
  {
    cod: "MEROP",
  },
  {
    cod: "MEROS",
  },
  {
    cod: "MERAR",
  },
  {
    cod: "MERWP",
  },
  {
    cod: "MERCU",
  },
  {
    cod: "MEROF",
  },
  {
    cod: "MECOS",
  },
  {
    cod: "MECK",
  },
  {
    cod: "MECHP",
  },
  {
    cod: "MECP",
  },
  {
    cod: "MERPO",
  },
  {
    cod: "MERMI",
  },
  {
    cod: "MERCUN",
  },
  {
    cod: "MERWPO",
  },
  {
    cod: "MERAP",
  },
  {
    cod: "MERCOS",
  },
  {
    cod: "PANCAS100",
  },
  {
    cod: "PANCAS1",
  },
  {
    cod: "PANCAS500",
  },
  {
    cod: "PANCAS250",
  },
  {
    cod: "PANOP250",
  },
  {
    cod: "PANOP500",
  },
  {
    cod: "PANOP1",
  },
  {
    cod: "PLFA",
  },
  {
    cod: "PLFS",
  },
  {
    cod: "PLFVA",
  },
  {
    cod: "DVA074",
  },
  {
    cod: "103062",
  },
  {
    cod: "PA DECOR 01",
  },
  {
    cod: "PR2RP",
  },
  {
    cod: "PA4RP",
  },
  {
    cod: "PC6RP",
  },
  {
    cod: "PL10RP",
  },
  {
    cod: "PR12RP",
  },
  {
    cod: "PC8RP",
  },
  {
    cod: "LMB",
  },
  {
    cod: "LMM",
  },
  {
    cod: "LTS",
  },
  {
    cod: "LUN",
  },
  {
    cod: "LPA",
  },
  {
    cod: "LNA",
  },
  {
    cod: "LCAM",
  },
  {
    cod: "LFLA",
  },
  {
    cod: "MEP11",
  },
  {
    cod: "95447",
  },
  {
    cod: "15524",
  },
  {
    cod: "15779",
  },
  {
    cod: "PL0012.10",
  },
  {
    cod: "SODP",
  },
  {
    cod: "MLAC",
  },
  {
    cod: "MTAC",
  },
  {
    cod: "MLLC",
  },
  {
    cod: "MLRC",
  },
  {
    cod: "MLRC2",
  },
  {
    cod: "MTLVC",
  },
  {
    cod: "MTVC",
  },
  {
    cod: "LCMSM",
  },
  {
    cod: "LCMP5",
  },
  {
    cod: "LCPIO",
  },
  {
    cod: "LCPOC",
  },
  {
    cod: "LCPIC",
  },
  {
    cod: "LCPCC",
  },
  {
    cod: "LPICM",
  },
  {
    cod: "LCPTO",
  },
  {
    cod: "LCPHH",
  },
  {
    cod: "LCPCH",
  },
  {
    cod: "LCPTR",
  },
  {
    cod: "LCPRO",
  },
  {
    cod: "MLTR",
  },
  {
    cod: "BGS",
  },
  {
    cod: "POMCN",
  },
  {
    cod: "POMMR",
  },
  {
    cod: "POMAN",
  },
  {
    cod: "POMRE",
  },
  {
    cod: "POMBA",
  },
  {
    cod: "POMJE",
  },
  {
    cod: "60211",
  },
  {
    cod: "60004",
  },
  {
    cod: "60004A",
  },
  {
    cod: "60004R",
  },
  {
    cod: "60004V",
  },
  {
    cod: "60004S",
  },
  {
    cod: "60004N",
  },
  {
    cod: "PANOP100",
  },
  {
    cod: "SNBR",
  },
  {
    cod: "SMRVD",
  },
  {
    cod: "MCCVF",
  },
  {
    cod: "MCCRG",
  },
  {
    cod: "SORFR",
  },
  {
    cod: "SORLI",
  },
  {
    cod: "SORCH",
  },
  {
    cod: "SHNYN",
  },
  {
    cod: "SNABP",
  },
  {
    cod: "SNHJC",
  },
  {
    cod: "SNPBL",
  },
  {
    cod: "SNP40",
  },
  {
    cod: "2060850FB",
  },
  {
    cod: "2060850LB",
  },
  {
    cod: "2060850NB",
  },
  {
    cod: "79273B",
  },
  {
    cod: "79183B",
  },
  {
    cod: "79185B",
  },
  {
    cod: "79272B",
  },
  {
    cod: "79142B",
  },
  {
    cod: "79190B",
  },
  {
    cod: "79277B",
  },
  {
    cod: "79146B",
  },
  {
    cod: "79193B",
  },
  {
    cod: "79204B",
  },
  {
    cod: "79191B",
  },
  {
    cod: "79194B",
  },
  {
    cod: "79184B",
  },
  {
    cod: "79519B",
  },
  {
    cod: "79187B",
  },
  {
    cod: "79195B",
  },
  {
    cod: "79198B",
  },
  {
    cod: "79189B",
  },
  {
    cod: "2060850PB",
  },
  {
    cod: "2060850RJB",
  },
  {
    cod: "2060850RB",
  },
  {
    cod: "2060850TB",
  },
  {
    cod: "2060850VAB",
  },
  {
    cod: "2060850VB",
  },
  {
    cod: "79186B",
  },
  {
    cod: "79139B",
  },
  {
    cod: "79188B",
  },
  {
    cod: "79147B",
  },
  {
    cod: "2060850SB",
  },
  {
    cod: "79270B",
  },
  {
    cod: "COM25",
  },
  {
    cod: "CCMUN",
  },
  {
    cod: "TAGMU",
  },
  {
    cod: "CCNAV",
  },
  {
    cod: "CORFN",
  },
  {
    cod: "ESAL24",
  },
  {
    cod: "ESAD20",
  },
  {
    cod: "ESAD24",
  },
  {
    cod: "ESD24",
  },
  {
    cod: "ESD20",
  },
  {
    cod: "BASE35",
  },
  {
    cod: "B2020",
  },
  {
    cod: "B1530",
  },
  {
    cod: "B2424",
  },
  {
    cod: "BAM10B",
  },
  {
    cod: "BAM18B",
  },
  {
    cod: "BAM14B",
  },
  {
    cod: "BAM12B",
  },
  {
    cod: "BAM16B",
  },
  {
    cod: "BAM20B",
  },
  {
    cod: "PA DECOR 07B",
  },
  {
    cod: "PA DECOR 06B",
  },
  {
    cod: "PA DECOR 08B",
  },
  {
    cod: "PA DECOR 01B",
  },
  {
    cod: "PA DECOR 22B",
  },
  {
    cod: "PA DECOR 30B",
  },
  {
    cod: "PA DECOR 15B",
  },
  {
    cod: "PA DECOR 04B",
  },
  {
    cod: "PA DECOR 05B",
  },
  {
    cod: "PA DECOR 21B",
  },
  {
    cod: "PA DECOR 32B",
  },
  {
    cod: "PA DECOR 23B",
  },
  {
    cod: "PA DECOR 31B",
  },
  {
    cod: "PA DECOR 02B",
  },
  {
    cod: "TFHF",
  },
  {
    cod: "TFHC",
  },
  {
    cod: "TFHSB",
  },
  {
    cod: "TFHTR",
  },
  {
    cod: "PMDDL",
  },
  {
    cod: "PBVAI",
  },
  {
    cod: "PMFRU",
  },
  {
    cod: "LCDNA",
  },
  {
    cod: "LCPNA",
  },
  {
    cod: "LCION",
  },
  {
    cod: "TFCD",
  },
  {
    cod: "TFCOP",
  },
  {
    cod: "TFCOD",
  },
  {
    cod: "TFCOM",
  },
  {
    cod: "TFREM",
  },
  {
    cod: "TFRED",
  },
  {
    cod: "TFREP",
  },
  {
    cod: "TFRMA",
  },
  {
    cod: "TFCRD",
  },
  {
    cod: "TFARV",
  },
  {
    cod: "TFARD",
  },
  {
    cod: "TFARP",
  },
  {
    cod: "TFEPL",
  },
  {
    cod: "TFEDO",
  },
  {
    cod: "TFFNM",
  },
  {
    cod: "TFFNV",
  },
  {
    cod: "TFFNP",
  },
  {
    cod: "TFFNR",
  },
  {
    cod: "TFFND",
  },
  {
    cod: "TFPF",
  },
  {
    cod: "TFBF",
  },
  {
    cod: "TFCTB",
  },
  {
    cod: "TFCTC",
  },
  {
    cod: "TFFME",
  },
  {
    cod: "S1272",
  },
  {
    cod: "TFFV",
  },
  {
    cod: "15018B",
  },
  {
    cod: "PCTRC",
  },
  {
    cod: "PCANC",
  },
  {
    cod: "PCCC",
  },
  {
    cod: "MAI450",
  },
  {
    cod: "VC500",
  },
  {
    cod: "2208R",
  },
  {
    cod: "2208V",
  },
  {
    cod: "2270B",
  },
  {
    cod: "17B10",
  },
  {
    cod: "TNX100",
  },
  {
    cod: "PANDULCE1000FGB",
  },
  {
    cod: "PANDULCE1000B",
  },
  {
    cod: "PANDULCE1000VCB!!",
  },
  {
    cod: "PANDULCE1000.2B",
  },
  {
    cod: "PANDULCE100PNB",
  },
  {
    cod: "PANDULCE100VCB",
  },
  {
    cod: "PANDULCE100B",
  },
  {
    cod: "PANDULCE250FGB",
  },
  {
    cod: "PANDULCE250PNB",
  },
  {
    cod: "PANDULCE250VCB",
  },
  {
    cod: "PANDULCE250B",
  },
  {
    cod: "PANDULCE500B",
  },
  {
    cod: "PANDULCE500VCB",
  },
  {
    cod: "PANDULCE500.2B",
  },
  {
    cod: "PANDULCE1000VLB",
  },
  {
    cod: "PANDULCE1000GOAB",
  },
  {
    cod: "PANDULCE500GOAB",
  },
  {
    cod: "PANDULCE500VLB",
  },
  {
    cod: "PANDULCE500PAZB",
  },
  {
    cod: "PANDULCE250GOAB",
  },
  {
    cod: "PANDULCE250VLB",
  },
  {
    cod: "PANDULCE100VLB",
  },
  {
    cod: "PANDULCE100GOAB",
  },
  {
    cod: "PANDULCE100PAZB",
  },
  {
    cod: "PANDULCE500FB",
  },
  {
    cod: "PANDULCE100RLB",
  },
  {
    cod: "PANDULCE100PNCB",
  },
  {
    cod: "PANDULCE100CAB",
  },
  {
    cod: "PANDULCE100BRB",
  },
  {
    cod: "PANDULCE250CAB",
  },
  {
    cod: "PANDULCE250PNCB",
  },
  {
    cod: "PANDULCE250BRB",
  },
  {
    cod: "PANDULCE500BRB",
  },
  {
    cod: "PANDULCE500PNCB",
  },
  {
    cod: "PANDULCE500CAB",
  },
  {
    cod: "PANDULCE1000BRB",
  },
  {
    cod: "PANDULCE1000PNCB",
  },
  {
    cod: "PANDULCE1000CAB",
  },
  {
    cod: "PANCAS100B",
  },
  {
    cod: "PANCAS1B",
  },
  {
    cod: "PANCAS500B",
  },
  {
    cod: "PANCAS250B",
  },
  {
    cod: "PANOP250B",
  },
  {
    cod: "PANOP500B",
  },
  {
    cod: "PANOP1B",
  },
  {
    cod: "PANOP100B",
  },
  {
    cod: "40830B",
  },
  {
    cod: "40828B",
  },
  {
    cod: "BALLCHOX3B",
  },
  {
    cod: "BALLIFORMHX3B",
  },
  {
    cod: "BALLVAIX3B",
  },
  {
    cod: "BALLCHOX0.75B",
  },
  {
    cod: "BALLIFORMHB",
  },
  {
    cod: "BALLVAIX0.75B",
  },
  {
    cod: "BAFONX0.5B",
  },
  {
    cod: "DEWAZTALCX1B",
  },
  {
    cod: "PRB11B",
  },
  {
    cod: "PRB15B",
  },
  {
    cod: "PBN05B",
  },
  {
    cod: "PBW01B",
  },
  {
    cod: "PCK01B",
  },
  {
    cod: "PC15AB",
  },
  {
    cod: "BAGOMX0.5NB",
  },
  {
    cod: "BAGOMX0.5RB",
  },
  {
    cod: "BAGOMX0.5B",
  },
  {
    cod: "BALLIAMARILLA50B",
  },
  {
    cod: "BALLIAZUL500B",
  },
  {
    cod: "BALLCACX0.5B",
  },
  {
    cod: "BALICEL500B",
  },
  {
    cod: "BALLCHOX0.5B",
  },
  {
    cod: "BALLINEGRA500B",
  },
  {
    cod: "BALLIROJO500B",
  },
  {
    cod: "BALLIROSA500B",
  },
  {
    cod: "BALLVAIX0.5B",
  },
  {
    cod: "BALLIVERDE500B",
  },
  {
    cod: "BALL0012B",
  },
  {
    cod: "BALLMODX0.5B",
  },
  {
    cod: "TLX100",
  },
  {
    cod: "2062380B",
  },
  {
    cod: "31725B",
  },
  {
    cod: "38613B",
  },
  {
    cod: "16961B",
  },
  {
    cod: "206014BB",
  },
  {
    cod: "206014CB",
  },
  {
    cod: "16956B",
  },
  {
    cod: "206014FB",
  },
  {
    cod: "16959B",
  },
  {
    cod: "41878B",
  },
  {
    cod: "40957B",
  },
  {
    cod: "40814B",
  },
  {
    cod: "16953B",
  },
  {
    cod: "16964B",
  },
  {
    cod: "16957B",
  },
  {
    cod: "40221B",
  },
  {
    cod: "16963B",
  },
  {
    cod: "16962B",
  },
  {
    cod: "40797B",
  },
  {
    cod: "2060140RB",
  },
  {
    cod: "206014VB",
  },
  {
    cod: "28800AB",
  },
  {
    cod: "28800CB",
  },
  {
    cod: "20628600B",
  },
  {
    cod: "20628900B",
  },
  {
    cod: "28800LB",
  },
  {
    cod: "20626000B",
  },
  {
    cod: "28800RB",
  },
  {
    cod: "POM43P",
  },
  {
    cod: "FENCOBSEMDULX1P",
  },
  {
    cod: "28800VB",
  },
  {
    cod: "44956B",
  },
  {
    cod: "44236B",
  },
  {
    cod: "44034B",
  },
  {
    cod: "44035B",
  },
  {
    cod: "44688B",
  },
  {
    cod: "44689B",
  },
  {
    cod: "44687B",
  },
  {
    cod: "44237B",
  },
  {
    cod: "44238B",
  },
  {
    cod: "44235B",
  },
  {
    cod: "BUNIB",
  },
  {
    cod: "BUNBB",
  },
  {
    cod: "44690B",
  },
  {
    cod: "BL001BB",
  },
  {
    cod: "47304B",
  },
  {
    cod: "47306B",
  },
  {
    cod: "47305B",
  },
  {
    cod: "47302B",
  },
  {
    cod: "47268B",
  },
  {
    cod: "38237B",
  },
  {
    cod: "38236B",
  },
  {
    cod: "DLF001",
  },
  {
    cod: "47303B",
  },
  {
    cod: "DLF014",
  },
  {
    cod: "17211",
  },
  {
    cod: "BNM5",
  },
  {
    cod: "CCPN",
  },
  {
    cod: "CCPNR",
  },
  {
    cod: "BCN16",
  },
  {
    cod: "CCAN",
  },
  {
    cod: "CCRN",
  },
  {
    cod: "CCREN",
  },
  {
    cod: "CCMNN",
  },
  {
    cod: "CCHJN",
  },
  {
    cod: "CCBN",
  },
  {
    cod: "CCPNO",
  },
  {
    cod: "CDVV",
  },
  {
    cod: "CDVR",
  },
  {
    cod: "CDVAM",
  },
  {
    cod: "BOTI025A",
  },
  {
    cod: "P122CA",
  },
  {
    cod: "404085",
  },
  {
    cod: "80219C",
  },
  {
    cod: "80219V",
  },
  {
    cod: "80219F",
  },
  {
    cod: "80219B",
  },
  {
    cod: "80219",
  },
  {
    cod: "PASTE1642",
  },
  {
    cod: "PASTE1673",
  },
  {
    cod: "TT250",
  },
  {
    cod: "V5SC50",
  },
  {
    cod: "CH9050",
  },
  {
    cod: "CO350",
  },
  {
    cod: "CR0850",
  },
  {
    cod: "CHB250",
  },
  {
    cod: "KC250",
  },
  {
    cod: "CAR150",
  },
  {
    cod: "DL150",
  },
  {
    cod: "PA250",
  },
  {
    cod: "CF1250",
  },
  {
    cod: "CA150",
  },
  {
    cod: "AL150",
  },
  {
    cod: "AZ250",
  },
  {
    cod: "OR150",
  },
  {
    cod: "LC250",
  },
  {
    cod: "V150",
  },
  {
    cod: "MTK450",
  },
  {
    cod: "V1SC50",
  },
  {
    cod: "SK253",
  },
  {
    cod: "SK245",
  },
  {
    cod: "SMNRA",
  },
  {
    cod: "SSBMM",
  },
  {
    cod: "SFYN",
  },
  {
    cod: "SCAN",
  },
  {
    cod: "SLOVE",
  },
  {
    cod: "SNEDP",
  },
  {
    cod: "STCV",
  },
  {
    cod: "PP0038B",
  },
  {
    cod: "PP0195B",
  },
  {
    cod: "PP0039B",
  },
  {
    cod: "MEBOSI21",
  },
  {
    cod: "700204",
  },
  {
    cod: "PCROP",
  },
  {
    cod: "PCVEP",
  },
  {
    cod: "Z04054",
  },
  {
    cod: "Z04052",
  },
  {
    cod: "Z01024",
  },
  {
    cod: "Z04098",
  },
  {
    cod: "GAN.L",
  },
  {
    cod: "240430",
  },
  {
    cod: "240413",
  },
  {
    cod: "BRLX2",
  },
  {
    cod: "BRDX2",
  },
  {
    cod: "BRPX2",
  },
  {
    cod: "BRFX2",
  },
  {
    cod: "PUN.39",
  },
  {
    cod: "SAMOR",
  },
  {
    cod: "SBESO",
  },
  {
    cod: "SCUPI",
  },
  {
    cod: "SALAS",
  },
  {
    cod: "SPCBL",
  },
  {
    cod: "SPCRH",
  },
  {
    cod: "MCCRO",
  },
  {
    cod: "BL500",
  },
  {
    cod: "32000",
  },
  {
    cod: "BTL500",
  },
  {
    cod: "BSL6",
  },
  {
    cod: "PAF500",
  },
  {
    cod: "PAF35",
  },
  {
    cod: "BSB6",
  },
  {
    cod: "BSSA6",
  },
  {
    cod: "PGLFEB",
  },
  {
    cod: "CCB5",
  },
  {
    cod: "PA DECOR 43",
  },
  {
    cod: "1",
  },
  {
    cod: "CPX50",
  },
  {
    cod: "MLAC2",
  },
  {
    cod: "MLCC2",
  },
  {
    cod: "MLCEC2",
  },
  {
    cod: "MMBLT",
  },
  {
    cod: "MMRBLT",
  },
  {
    cod: "BAM03F",
  },
  {
    cod: "122CAF",
  },
  {
    cod: "BANOLE",
  },
  {
    cod: "GANMAN",
  },
  {
    cod: "GANMAR",
  },
  {
    cod: "SASIA",
  },
  {
    cod: "DBBVTO",
  },
  {
    cod: "DBLVTO",
  },
  {
    cod: "DMLVTO",
  },
  {
    cod: "DMBVTO",
  },
  {
    cod: "DDCVTO",
  },
  {
    cod: "DBVVTO",
  },
  {
    cod: "DMCVTO",
  },
  {
    cod: "DBCVTO",
  },
  {
    cod: "4072V",
  },
  {
    cod: "4075V",
  },
  {
    cod: "MAC12",
  },
  {
    cod: "1005",
  },
  {
    cod: "1702",
  },
  {
    cod: "DLFVTO",
  },
  {
    cod: "10000203B",
  },
  {
    cod: "CODVTO",
  },
  {
    cod: "104049",
  },
  {
    cod: "103037G",
  },
  {
    cod: "103037T",
  },
  {
    cod: "SPH11P",
  },
  {
    cod: "BAGORO",
  },
  {
    cod: "BAGONE",
  },
  {
    cod: "PASTBALL",
  },
  {
    cod: "PINL1",
  },
  {
    cod: "PINL3",
  },
  {
    cod: "PINL5",
  },
  {
    cod: "PA DECOR 01B",
  },
  {
    cod: "RP51961",
  },
  {
    cod: "5129V",
  },
  {
    cod: "PRROP",
  },
  {
    cod: "PRVEP",
  },
  {
    cod: "PAVEP",
  },
  {
    cod: "MCFAR",
  },
  {
    cod: "MCFNR",
  },
  {
    cod: "131500",
  },
  {
    cod: "95140600",
  },
  {
    cod: "MOULED",
  },
  {
    cod: "DF400",
  },
  {
    cod: "PFL200",
  },
  {
    cod: "COLNAR",
  },
  {
    cod: "COLLIM",
  },
  {
    cod: "ARGCERCHOMUL105",
  },
  {
    cod: "PAS500",
  },
  {
    cod: "GP500",
  },
  {
    cod: "PGA500",
  },
  {
    cod: "PGB500",
  },
  {
    cod: "PGV500",
  },
  {
    cod: "PGV200",
  },
  {
    cod: "GVL500",
  },
  {
    cod: "PGN500",
  },
  {
    cod: "MAN250",
  },
  {
    cod: "PGLA1",
  },
  {
    cod: "LHE",
  },
  {
    cod: "LPAW",
  },
  {
    cod: "LCOM",
  },
  {
    cod: "LBT21",
  },
  {
    cod: "TMX100",
  },
  {
    cod: "PDCPM",
  },
  {
    cod: "30016",
  },
  {
    cod: "DM0439",
  },
  {
    cod: "DM0371",
  },
  {
    cod: "BOTISET6",
  },
  {
    cod: "BOTISET5",
  },
  {
    cod: "BOTISET4",
  },
  {
    cod: "BOTISET2",
  },
  {
    cod: "BOTISET1",
  },
  {
    cod: "BOTISET7",
  },
  {
    cod: "BOTISET3",
  },
  {
    cod: "COL",
  },
  {
    cod: "OUTMC",
  },
  {
    cod: "C1474",
  },
  {
    cod: "SMCO1",
  },
  {
    cod: "SESAMO",
  },
  {
    cod: "PIMROS",
  },
  {
    cod: "CPN1",
  },
  {
    cod: "PGLA5",
  },
  {
    cod: "LECHE",
  },
  {
    cod: "PUPAS",
  },
  {
    cod: "CAS5",
  },
  {
    cod: "CACR",
  },
  {
    cod: "CAS1",
  },
  {
    cod: "CAS200",
  },
  {
    cod: "200708",
  },
  {
    cod: "1033L",
  },
  {
    cod: "1038L",
  },
  {
    cod: "49593",
  },
  {
    cod: "CARI",
  },
  {
    cod: "071L",
  },
  {
    cod: "TGBER",
  },
  {
    cod: "TGBEF",
  },
  {
    cod: "TGBERO",
  },
  {
    cod: "103037D",
  },
  {
    cod: "71000432",
  },
  {
    cod: "211500231",
  },
  {
    cod: "CUNEG",
  },
  {
    cod: "603413",
  },
  {
    cod: "DRIP25C",
  },
  {
    cod: "MID32C",
  },
  {
    cod: "12CUPV",
  },
  {
    cod: "MTARB",
  },
  {
    cod: "CHEESSC",
  },
  {
    cod: "CPBVS",
  },
  {
    cod: "BOTI048B",
  },
  {
    cod: "BOTI049B",
  },
  {
    cod: "RA102",
  },
  {
    cod: "P1529",
  },
  {
    cod: "VMARC",
  },
  {
    cod: "C1479",
  },
  {
    cod: "5360L",
  },
  {
    cod: "PANRBA",
  },
  {
    cod: "PANPLA",
  },
  {
    cod: "PANGLO",
  },
  {
    cod: "PANPL100",
  },
  {
    cod: "PANGN100",
  },
  {
    cod: "PANBA100",
  },
  {
    cod: "PANPL250",
  },
  {
    cod: "PANRB250",
  },
  {
    cod: "PANGN250",
  },
  {
    cod: "PANPL5",
  },
  {
    cod: "PANGN5",
  },
  {
    cod: "PANRB5",
  },
  {
    cod: "LOCOM1",
  },
  {
    cod: "114BO20",
  },
  {
    cod: "HOLD",
  },
  {
    cod: "COSSS",
  },
  {
    cod: "COXMM",
  },
  {
    cod: "CARTBGXS",
  },
  {
    cod: "ARA2",
  },
  {
    cod: "BAY2",
  },
  {
    cod: "DUR3",
  },
  {
    cod: "MRC2",
  },
  {
    cod: "BAM100",
  },
  {
    cod: "MER40",
  },
  {
    cod: "1352C",
  },
  {
    cod: "GVPE50",
  },
  {
    cod: "3DLOEN",
  },
  {
    cod: "PRISMA",
  },
  {
    cod: "651A",
  },
  {
    cod: "651R",
  },
  {
    cod: "651",
  },
  {
    cod: "1664R",
  },
  {
    cod: "3741R",
  },
  {
    cod: "3741A",
  },
  {
    cod: "Y438V",
  },
  {
    cod: "Y440",
  },
  {
    cod: "OLEO",
  },
  {
    cod: "48133",
  },
  {
    cod: "16751",
  },
  {
    cod: "ACEB10",
  },
  {
    cod: "ACEB20",
  },
  {
    cod: "MID25C",
  },
  {
    cod: "12615",
  },
  {
    cod: "404088",
  },
  {
    cod: "404087",
  },
  {
    cod: "404086",
  },
  {
    cod: "3DCNT",
  },
  {
    cod: "BOTI056B",
  },
  {
    cod: "BOTI058B",
  },
  {
    cod: "87/10",
  },
  {
    cod: "26310",
  },
  {
    cod: "BBBA5023",
  },
  {
    cod: "BCUADIB",
  },
  {
    cod: "C213SA",
  },
  {
    cod: "3DCUB",
  },
  {
    cod: "PASRICH",
  },
  {
    cod: "MR269",
  },
  {
    cod: "MR268",
  },
  {
    cod: "LVP250",
  },
  {
    cod: "DRIPLE120",
  },
  {
    cod: "NUMLE113",
  },
  {
    cod: "DESLE105",
  },
  {
    cod: "DELLE103",
  },
  {
    cod: "KOPYAN05",
  },
  {
    cod: "DEXT",
  },
  {
    cod: "CTVI",
  },
  {
    cod: "42078A",
  },
  {
    cod: "42078C",
  },
  {
    cod: "119696",
  },
  {
    cod: "119724",
  },
  {
    cod: "CAPAGEOR13",
  },
  {
    cod: "CAPAGEOR14",
  },
  {
    cod: "CAPAGEOR15",
  },
  {
    cod: "VTORN",
  },
  {
    cod: "VTOUHT",
  },
  {
    cod: "VTOCFRUT",
  },
  {
    cod: "VTO30/05C",
  },
  {
    cod: "VTO19/05C",
  },
  {
    cod: "BOTI059B",
  },
  {
    cod: "100774",
  },
  {
    cod: "588M",
  },
  {
    cod: "demochocolartpapa",
  },
  {
    cod: "demoflor",
  },
  {
    cod: "W2094117",
  },
  {
    cod: "104161O",
  },
  {
    cod: "104161V",
  },
  {
    cod: "STENCILABC",
  },
  {
    cod: "SILINORDICO",
  },
  {
    cod: "PS3040",
  },
  {
    cod: "I21730",
  },
  {
    cod: "PALAM",
  },
  {
    cod: "MH210921",
  },
  {
    cod: "REP5072",
  },
  {
    cod: "MSTCD",
  },
  {
    cod: "104038",
  },
  {
    cod: "TORTA3",
  },
  {
    cod: "AX4002",
  },
  {
    cod: "3DKOC",
  },
  {
    cod: "2561272",
  },
  {
    cod: "161653V",
  },
  {
    cod: "LC125C",
  },
  {
    cod: "MPHRR",
  },
  {
    cod: "ECO",
  },
  {
    cod: "BSKPLAT",
  },
  {
    cod: "BSKINGFBCO",
  },
  {
    cod: "BSMD18R1",
  },
  {
    cod: "BM1929",
  },
];

export const disableTnProducts = async () => {
  const disabledCodesSet = new Set(
    disabledCodes.map((code) => code.cod.toUpperCase())
  );
  const tnProducts = await tnNormalStore.getAllProducts();

  const productsToDisable = tnProducts.filter((product) => {
    const sku = product.variants[0].sku?.toUpperCase();
    if (!sku) return false;
    return disabledCodesSet.has(sku);
  });

  console.log(`Disabling ${productsToDisable.length} products`);

  await tnNormalStore.updateProducts(
    productsToDisable.map((product) => ({
      productId: product.id,
      variantId: product.variants[0].id,
      published: false,
    })),
    {
      async onError(_updatedProducts, failedProduct) {
        console.error("Failed to disable products", failedProduct);
      },
      async onSuccess(updatedProduct) {
        console.log("Successfully disabled product", updatedProduct);
      },
      async onFinished(updatedProducts) {
        console.log("Finished disabling products", updatedProducts);
      },
    }
  );
};
