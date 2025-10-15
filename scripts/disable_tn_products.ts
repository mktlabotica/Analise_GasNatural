import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";

const disabledCodes = [
  {
    code: "51453",
  },
  {
    code: "64166",
  },
  {
    code: "NIÑOSLOMAS",
  },
  {
    code: "327804",
  },
  {
    code: "DEMODOLCE",
  },
  {
    code: "CASITACONBETTI18",
  },
  {
    code: "327806",
  },
  {
    code: "327808",
  },
  {
    code: "327809",
  },
  {
    code: "327822",
  },
  {
    code: "327824",
  },
  {
    code: "327825",
  },
  {
    code: "327826",
  },
  {
    code: "327827",
  },
  {
    code: "BM1929",
  },
  {
    code: "TALLERPARPENLOMAS",
  },
  {
    code: "DEMOFLOPYDIAZ",
  },
  {
    code: "LUNAVIDADNIÑOS22",
  },
  {
    code: "DEMOMILARTES",
  },
  {
    code: "1291",
  },
  {
    code: "PINTURASOBREGLASE",
  },
  {
    code: "BSPARR28",
  },
  {
    code: "BSPARB28",
  },
  {
    code: "BSPARB24",
  },
  {
    code: "BSPARR24",
  },
  {
    code: "BSBANDO",
  },
  {
    code: "BSBANRE",
  },
  {
    code: "BSPMB26",
  },
  {
    code: "BSCH3",
  },
  {
    code: "BSOR1",
  },
  {
    code: "BSV1SC",
  },
  {
    code: "BSV5SC",
  },
  {
    code: "BSV1",
  },
  {
    code: "BSV1",
  },
  {
    code: "BSPA2",
  },
  {
    code: "BSMTK4",
  },
  {
    code: "BSLI1",
  },
  {
    code: "BSCO3",
  },
  {
    code: "BSAL1",
  },
  {
    code: "BSBallinegra500",
  },
  {
    code: "BSBallirojo500",
  },
  {
    code: "BS10000448",
  },
  {
    code: "BSBallvaix0.5",
  },
  {
    code: "BSBAD302",
  },
  {
    code: "BSBAD242",
  },
  {
    code: "BSTF1810",
  },
  {
    code: "BSTF1210",
  },
  {
    code: "BSTF1610",
  },
  {
    code: "BSTF1410",
  },
  {
    code: "BSTF1815",
  },
  {
    code: "BSTF1615",
  },
  {
    code: "BSTF1415",
  },
  {
    code: "BSTF1215",
  },
  {
    code: "BSPA DECOR 05",
  },
  {
    code: "BSPA DECOR 04",
  },
  {
    code: "BSPA DECOR 02",
  },
  {
    code: "BSPA DECOR 06",
  },
  {
    code: "BSMD12R5",
  },
  {
    code: "BSGP",
  },
  {
    code: "BSMD08R05",
  },
  {
    code: "BSMD08R1",
  },
  {
    code: "BSMD23R1",
  },
  {
    code: "BSMD23R05",
  },
  {
    code: "BSMD18",
  },
  {
    code: "BSMD18R5",
  },
  {
    code: "BSMD18R1",
  },
  {
    code: "BSMD12R1",
  },
  {
    code: "BSMD08",
  },
  {
    code: "BSBGC01.C10",
  },
  {
    code: "BSBGC01.2D",
  },
  {
    code: "BSBGC01.6B",
  },
  {
    code: "BSBGC01.1M",
  },
  {
    code: "BSTOR0134",
  },
  {
    code: "BSTOR0133",
  },
  {
    code: "BSTOR0132",
  },
  {
    code: "BSTOR0131",
  },
  {
    code: "BSCIN0483",
  },
  {
    code: "BSBUD0123",
  },
  {
    code: "DEMOJUANMANUEL",
  },
  {
    code: "BSLPCOM",
  },
  {
    code: "BSLOCOM",
  },
  {
    code: "BSKLROJO",
  },
  {
    code: "BSKLASR",
  },
  {
    code: "BSKLASG",
  },
  {
    code: "BSKDOR",
  },
  {
    code: "BSC1504",
  },
  {
    code: "BSC1503",
  },
  {
    code: "BSC637",
  },
  {
    code: "BSPD0103",
  },
  {
    code: "BSCG0115",
  },
  {
    code: "BSCV0215",
  },
  {
    code: "BSCR0615",
  },
  {
    code: "BSPOMFRA",
  },
  {
    code: "BSPOMFR",
  },
  {
    code: "BSPOMAR",
  },
  {
    code: "BSCMLGDF003",
  },
  {
    code: "BSCMLGDF002",
  },
  {
    code: "BS3401133",
  },
  {
    code: "BS3381312",
  },
  {
    code: "BS3401143",
  },
  {
    code: "BS3381153",
  },
  {
    code: "BSM10N",
  },
  {
    code: "BSM9AM",
  },
  {
    code: "BSM8A",
  },
  {
    code: "BS1289A",
  },
  {
    code: "BS2004C",
  },
  {
    code: "BS1953GI",
  },
  {
    code: "BS1798A",
  },
  {
    code: "BS1521",
  },
  {
    code: "BS1497A",
  },
  {
    code: "BS2014C",
  },
  {
    code: "BS3DCUJC",
  },
  {
    code: "BS3DTJC",
  },
  {
    code: "BS3DCJC",
  },
  {
    code: "BS3DKDU",
  },
  {
    code: "BS3DC10",
  },
  {
    code: "BS3DCRO",
  },
  {
    code: "BS3DC1",
  },
  {
    code: "BS3DCL",
  },
  {
    code: "BS3DUCF",
  },
  {
    code: "BS3DBANM",
  },
  {
    code: "BS3DPOP",
  },
  {
    code: "BS3DBAN",
  },
  {
    code: "BS3DPLU",
  },
  {
    code: "BS3DCI",
  },
  {
    code: "BS3DSAN",
  },
  {
    code: "BS3DBAR",
  },
  {
    code: "BS3DKJA",
  },
  {
    code: "BSDLR004",
  },
  {
    code: "BSDLR005",
  },
  {
    code: "BSDLR006",
  },
  {
    code: "BSDLR0010",
  },
  {
    code: "BSDLR3",
  },
  {
    code: "BSDLR007",
  },
  {
    code: "BSF5287",
  },
  {
    code: "BSF5436",
  },
  {
    code: "BSF9973",
  },
  {
    code: "BSF854",
  },
  {
    code: "BS270",
  },
  {
    code: "BSPaste01",
  },
  {
    code: "DEMOBUTTERCREAM",
  },
  {
    code: "LUNAVIDADNIÑOS",
  },
  {
    code: "DEMOMAURICIOASTA",
  },
  {
    code: "DEMOSANDRAFERRARA",
  },
  {
    code: "tallerdecupackes",
  },
  {
    code: "COOKIESDECORADAS",
  },
  {
    code: "TALLERNIÑOSLU25",
  },
  {
    code: "53637",
  },
  {
    code: "TALLERNAVIDADMARA",
  },
  {
    code: "PIZPIRETAINICIAL",
  },
  {
    code: "MINITARTAS",
  },
  {
    code: "PIZPIRETAFAMILIAR",
  },
  {
    code: "ALFAJORESAMAZINGCAKES",
  },
  {
    code: "TORTAFENGSHUI",
  },
  {
    code: "COCINAANTIINFLAMATORIA",
  },
  {
    code: "MARAINTENSAMENTE",
  },
  {
    code: "TECNICACONMANGA",
  },
  {
    code: "ALFAJORESARGENTINOS",
  },
  {
    code: "PIZPIRETA2809",
  },
  {
    code: "TITITASINICIAL",
  },
  {
    code: "TALLERNIÑOSLU",
  },
  {
    code: "TALLERADULTXSLU",
  },
  {
    code: "demolucia",
  },
  {
    code: "LC125C",
  },
  {
    code: "6339RF",
  },
  {
    code: "demorichs",
  },
  {
    code: "26079",
  },
  {
    code: "60641",
  },
  {
    code: "60040",
  },
  {
    code: "327810",
  },
  {
    code: "DEMOCARI",
  },
  {
    code: "demorichs",
  },
  {
    code: "demoledevit08",
  },
  {
    code: "ALECABALLITO",
  },
  {
    code: "JUANARGENTINA",
  },
  {
    code: "Aleysami",
  },
  {
    code: "BAR01A",
  },
  {
    code: "Tititas",
  },
  {
    code: "MH200686",
  },
  {
    code: "BSM1B",
  },
  {
    code: "BSM2R",
  },
  {
    code: "BSM4CE",
  },
  {
    code: "M5L",
  },
  {
    code: "BSM7V",
  },
  {
    code: "TC2470",
  },
  {
    code: "TC2471",
  },
  {
    code: "TC2472",
  },
  {
    code: "TC2475",
  },
  {
    code: "MH210921",
  },
  {
    code: "46PE5024",
  },
  {
    code: "46PE5023",
  },
  {
    code: "REPFRA32",
  },
  {
    code: "REPFRA31",
  },
  {
    code: "GIFTY",
  },
  {
    code: "104161O",
  },
  {
    code: "104161V",
  },
  {
    code: "atelierfrench",
  },
  {
    code: "SOLROSCAREYES",
  },
  {
    code: "CAPAJUMA",
  },
  {
    code: "CK198664C",
  },
  {
    code: "CK198664B",
  },
  {
    code: "CK198664A",
  },
  {
    code: "CK198664R",
  },
  {
    code: "CK198664N",
  },
  {
    code: "CK198664G",
  },
  {
    code: "CK198664V",
  },
  {
    code: "VTOCFRUT",
  },
  {
    code: "VTO30/05C",
  },
  {
    code: "CAPAJULO",
  },
  {
    code: "CDINSC",
  },
  {
    code: "PORT",
  },
  {
    code: "CAPAGEOR14",
  },
  {
    code: "CAPAGEOR13",
  },
  {
    code: "SECAPAJU",
  },
  {
    code: "119724",
  },
  {
    code: "119696",
  },
  {
    code: "42078C",
  },
  {
    code: "42078A",
  },
  {
    code: "REJOY",
  },
  {
    code: "CTCAR",
  },
  {
    code: "CTCO",
  },
  {
    code: "CTHC",
  },
  {
    code: "CTROC",
  },
  {
    code: "CTVI",
  },
  {
    code: "CTTA",
  },
  {
    code: "CTLOV",
  },
  {
    code: "CTMAR",
  },
  {
    code: "CTFP",
  },
  {
    code: "CTLN",
  },
  {
    code: "CTARC",
  },
  {
    code: "BURTA",
  },
  {
    code: "BURM",
  },
  {
    code: "LCMES",
  },
  {
    code: "LCPIN",
  },
  {
    code: "LCMER",
  },
  {
    code: "LCDEF",
  },
  {
    code: "LCHA",
  },
  {
    code: "LCKITT",
  },
  {
    code: "LCMAR",
  },
  {
    code: "LCMAP",
  },
  {
    code: "LCCEB",
  },
  {
    code: "LCMIC",
  },
  {
    code: "KOPYAN06",
  },
  {
    code: "KOPYAN05",
  },
  {
    code: "KOPYAN07",
  },
  {
    code: "P1741",
  },
  {
    code: "DLA10",
  },
  {
    code: "3324",
  },
  {
    code: "DRIPLE120",
  },
  {
    code: "NUMLE113",
  },
  {
    code: "DESLE105",
  },
  {
    code: "DELLE103",
  },
  {
    code: "50849V",
  },
  {
    code: "C213SA",
  },
  {
    code: "TWOO",
  },
  {
    code: "TSTI",
  },
  {
    code: "TPOK",
  },
  {
    code: "TBAU",
  },
  {
    code: "TVALE",
  },
  {
    code: "GIFTY",
  },
  {
    code: "GIFTY",
  },
  {
    code: "GIFTY",
  },
  {
    code: "GIFTY",
  },
  {
    code: "GIFTY",
  },
  {
    code: "GIFTY",
  },
  {
    code: "I21726",
  },
  {
    code: "I21725",
  },
  {
    code: "I21727",
  },
  {
    code: "3DCNT",
  },
  {
    code: "TBOCA",
  },
  {
    code: "TRIVE",
  },
  {
    code: "MID25C",
  },
  {
    code: "16751",
  },
  {
    code: "22184",
  },
  {
    code: "PPP0133",
  },
  {
    code: "TNAV",
  },
  {
    code: "E004202",
  },
  {
    code: "OLEO",
  },
  {
    code: "DESM",
  },
  {
    code: "Y438",
  },
  {
    code: "Y440",
  },
  {
    code: "Y440V",
  },
  {
    code: "Y438R",
  },
  {
    code: "Y438A",
  },
  {
    code: "Y438V",
  },
  {
    code: "NAV",
  },
  {
    code: "6212",
  },
  {
    code: "X6C",
  },
  {
    code: "Y483V",
  },
  {
    code: "S66",
  },
  {
    code: "1664R",
  },
  {
    code: "651R",
  },
  {
    code: "651",
  },
  {
    code: "3741V",
  },
  {
    code: "6391",
  },
  {
    code: "X6R",
  },
  {
    code: "2020RV",
  },
  {
    code: "3741",
  },
  {
    code: "651A",
  },
  {
    code: "Z0226",
  },
  {
    code: "MR36",
  },
  {
    code: "SB154",
  },
  {
    code: "SC354",
  },
  {
    code: "SC364",
  },
  {
    code: "SA245",
  },
  {
    code: "PRISMA",
  },
  {
    code: "1352L",
  },
  {
    code: "24001",
  },
  {
    code: "210500852",
  },
  {
    code: "210700331",
  },
  {
    code: "210500141",
  },
  {
    code: "230800361",
  },
  {
    code: "23088932",
  },
  {
    code: "210700413",
  },
  {
    code: "SORBE2",
  },
  {
    code: "SPNARV",
  },
  {
    code: "SPERV",
  },
  {
    code: "SPNMJ",
  },
  {
    code: "68157",
  },
  {
    code: "KODK03",
  },
  {
    code: "KODK01",
  },
  {
    code: "KODK02",
  },
  {
    code: "KODK04",
  },
  {
    code: "KOCF03",
  },
  {
    code: "KONF01",
  },
  {
    code: "KONF02",
  },
  {
    code: "KONF04",
  },
  {
    code: "P1727",
  },
  {
    code: "HOLD",
  },
  {
    code: "COSSS",
  },
  {
    code: "COXMM",
  },
  {
    code: "CARTBGXS",
  },
  {
    code: "SK66",
  },
  {
    code: "SC413",
  },
  {
    code: "SA324",
  },
  {
    code: "SC415",
  },
  {
    code: "30336",
  },
  {
    code: "BP4099A",
  },
  {
    code: "BP4099V",
  },
  {
    code: "BP4099L",
  },
  {
    code: "VGAN",
  },
  {
    code: "TBAND",
  },
  {
    code: "TCOMU",
  },
  {
    code: "LOCOM1",
  },
  {
    code: "41007",
  },
  {
    code: "41048",
  },
  {
    code: "41004",
  },
  {
    code: "41047",
  },
  {
    code: "103037D",
  },
  {
    code: "VHUEL",
  },
  {
    code: "VLAB",
  },
  {
    code: "VMAR",
  },
  {
    code: "FRUE850",
  },
  {
    code: "SHCF1",
  },
  {
    code: "SHMFA1",
  },
  {
    code: "B4BAR",
  },
  {
    code: "SHCC1",
  },
  {
    code: "200708",
  },
  {
    code: "2561363",
  },
  {
    code: "BAN6",
  },
  {
    code: "BAN4",
  },
  {
    code: "BAN7",
  },
  {
    code: "BAN1",
  },
  {
    code: "BAN5",
  },
  {
    code: "VMBN3",
  },
  {
    code: "VMBN8",
  },
  {
    code: "VMBN4",
  },
  {
    code: "VMBN2",
  },
  {
    code: "VMBN7",
  },
  {
    code: "VMBN1",
  },
  {
    code: "VDIN5",
  },
  {
    code: "VDIN0",
  },
  {
    code: "VDIN3",
  },
  {
    code: "VDIN4",
  },
  {
    code: "VDIN7",
  },
  {
    code: "VDIN1",
  },
  {
    code: "VDIN8",
  },
  {
    code: "VMER8",
  },
  {
    code: "VMER1",
  },
  {
    code: "VMER5",
  },
  {
    code: "VMER7",
  },
  {
    code: "VMER4",
  },
  {
    code: "VMER6",
  },
  {
    code: "GUFANRS",
  },
  {
    code: "DRIP25C",
  },
  {
    code: "MID32C",
  },
  {
    code: "MU04",
  },
  {
    code: "TARC",
  },
  {
    code: "CHEESSC",
  },
  {
    code: "MTARB",
  },
  {
    code: "MU03",
  },
  {
    code: "12CUPV",
  },
  {
    code: "MU06",
  },
  {
    code: "BA08",
  },
  {
    code: "BA06",
  },
  {
    code: "COLVAI",
  },
  {
    code: "TGBER",
  },
  {
    code: "TGBEF",
  },
  {
    code: "TGMRCC",
  },
  {
    code: "TGMVC",
  },
  {
    code: "TGBERO",
  },
  {
    code: "GPOK5",
  },
  {
    code: "PUN.90",
  },
  {
    code: "PUN134",
  },
  {
    code: "71000450",
  },
  {
    code: "71000459",
  },
  {
    code: "SPMEB",
  },
  {
    code: "SPLVP",
  },
  {
    code: "SPMBR",
  },
  {
    code: "SPMCM",
  },
  {
    code: "SPLPL",
  },
  {
    code: "SPENPD",
  },
  {
    code: "SPFROZ",
  },
  {
    code: "SPBAR",
  },
  {
    code: "SPSBM",
  },
  {
    code: "SPMINN",
  },
  {
    code: "DCCM",
  },
  {
    code: "8842A",
  },
  {
    code: "71000432",
  },
  {
    code: "71000451",
  },
  {
    code: "7107091",
  },
  {
    code: "71000460",
  },
  {
    code: "71000453",
  },
  {
    code: "71000457",
  },
  {
    code: "230800061",
  },
  {
    code: "230800292",
  },
  {
    code: "230800358",
  },
  {
    code: "71000452",
  },
  {
    code: "230800357",
  },
  {
    code: "30193",
  },
  {
    code: "101149",
  },
  {
    code: "101101C",
  },
  {
    code: "101101R",
  },
  {
    code: "21053241",
  },
  {
    code: "2265A",
  },
  {
    code: "6123",
  },
  {
    code: "M322",
  },
  {
    code: "2374A",
  },
  {
    code: "1003N",
  },
  {
    code: "1003RJ",
  },
  {
    code: "1003VI",
  },
  {
    code: "1003VP",
  },
  {
    code: "1003C",
  },
  {
    code: "1003R",
  },
  {
    code: "MTMI12",
  },
  {
    code: "MTMP12",
  },
  {
    code: "MTMD12",
  },
  {
    code: "MTMR12",
  },
  {
    code: "40510",
  },
  {
    code: "10582",
  },
  {
    code: "20384",
  },
  {
    code: "46023",
  },
  {
    code: "HH379",
  },
  {
    code: "HH015",
  },
  {
    code: "260136",
  },
  {
    code: "HH016",
  },
  {
    code: "61598",
  },
  {
    code: "R22L",
  },
  {
    code: "F01",
  },
  {
    code: "N195",
  },
  {
    code: "TMARI",
  },
  {
    code: "TMSA",
  },
  {
    code: "CMMSA",
  },
  {
    code: "AX5002",
  },
  {
    code: "CPF3",
  },
  {
    code: "CPF4",
  },
  {
    code: "CPF9",
  },
  {
    code: "CPF7",
  },
  {
    code: "CPF6",
  },
  {
    code: "CPF5",
  },
  {
    code: "CPM4",
  },
  {
    code: "CPM8",
  },
  {
    code: "CPM5",
  },
  {
    code: "CPF1",
  },
  {
    code: "CPM6",
  },
  {
    code: "CPF2",
  },
  {
    code: "CPM3",
  },
  {
    code: "CPM7",
  },
  {
    code: "CPM1",
  },
  {
    code: "CPM2",
  },
  {
    code: "STTK1",
  },
  {
    code: "SCPP1",
  },
  {
    code: "SLYP1",
  },
  {
    code: "SLOVE1",
  },
  {
    code: "SNBBO1",
  },
  {
    code: "TSIR",
  },
  {
    code: "GUT045",
  },
  {
    code: "BAN205",
  },
  {
    code: "PIMROS",
  },
  {
    code: "1375VO",
  },
  {
    code: "MIXBAN",
  },
  {
    code: "SESAMO",
  },
  {
    code: "SMCF1",
  },
  {
    code: "SMEF1",
  },
  {
    code: "5008",
  },
  {
    code: "SDDP1",
  },
  {
    code: "CANDY",
  },
  {
    code: "CEL012",
  },
  {
    code: "SK268",
  },
  {
    code: "P038",
  },
  {
    code: "SA301",
  },
  {
    code: "SA303",
  },
  {
    code: "SA306",
  },
  {
    code: "SA302",
  },
  {
    code: "PINTAPON",
  },
  {
    code: "SC146",
  },
  {
    code: "SC211",
  },
  {
    code: "SC147",
  },
  {
    code: "SC74",
  },
  {
    code: "DM0371",
  },
  {
    code: "COL",
  },
  {
    code: "DM0439",
  },
  {
    code: "TMB",
  },
  {
    code: "B0870",
  },
  {
    code: "LBT21",
  },
  {
    code: "LCOM",
  },
  {
    code: "880001",
  },
  {
    code: "880005",
  },
  {
    code: "LPAW",
  },
  {
    code: "TMM",
  },
  {
    code: "LHE",
  },
  {
    code: "ANILL",
  },
  {
    code: "95140600",
  },
  {
    code: "SMNRD1",
  },
  {
    code: "SRZR1",
  },
  {
    code: "SNEDP1",
  },
  {
    code: "SFCL1",
  },
  {
    code: "SMNRA1",
  },
  {
    code: "SRRB1",
  },
  {
    code: "SPPS1",
  },
  {
    code: "1026RO",
  },
  {
    code: "PINL5",
  },
  {
    code: "SPH11P",
  },
  {
    code: "PINL3",
  },
  {
    code: "PINL1",
  },
  {
    code: "3DLOEN",
  },
  {
    code: "HUCON",
  },
  {
    code: "DIBCON",
  },
  {
    code: "FMPROS",
  },
  {
    code: "104049",
  },
  {
    code: "103037T",
  },
  {
    code: "103037G",
  },
  {
    code: "HARRO",
  },
  {
    code: "4198",
  },
  {
    code: "48535",
  },
  {
    code: "20381",
  },
  {
    code: "48133",
  },
  {
    code: "70665",
  },
  {
    code: "70381",
  },
  {
    code: "70439",
  },
  {
    code: "70664",
  },
  {
    code: "70406",
  },
  {
    code: "70662",
  },
  {
    code: "70661",
  },
  {
    code: "1005",
  },
  {
    code: "ST115",
  },
  {
    code: "ST114",
  },
  {
    code: "ST112",
  },
  {
    code: "ST111",
  },
  {
    code: "HTESP",
  },
  {
    code: "32000",
  },
  {
    code: "SALAS",
  },
  {
    code: "F04MTART",
  },
  {
    code: "SCUPI",
  },
  {
    code: "28128",
  },
  {
    code: "281380",
  },
  {
    code: "BRLX2",
  },
  {
    code: "BRDX2",
  },
  {
    code: "WRLX3",
  },
  {
    code: "BRFX2",
  },
  {
    code: "BRPX2",
  },
  {
    code: "WRDX2",
  },
  {
    code: "I21345",
  },
  {
    code: "I21410",
  },
  {
    code: "TOCON",
  },
  {
    code: "I21207",
  },
  {
    code: "AGUILA",
  },
  {
    code: "41637",
  },
  {
    code: "41003",
  },
  {
    code: "240413",
  },
  {
    code: "240430",
  },
  {
    code: "I21423",
  },
  {
    code: "58881",
  },
  {
    code: "858805",
  },
  {
    code: "8805",
  },
  {
    code: "58805",
  },
  {
    code: "BBBA4331",
  },
  {
    code: "6106",
  },
  {
    code: "1355",
  },
  {
    code: "KDIGOL",
  },
  {
    code: "PX1",
  },
  {
    code: "KDISILV",
  },
  {
    code: "SG327",
  },
  {
    code: "SET48",
  },
  {
    code: "SET52",
  },
  {
    code: "SG328",
  },
  {
    code: "SG318",
  },
  {
    code: "SG319",
  },
  {
    code: "P043",
  },
  {
    code: "P040",
  },
  {
    code: "SK267",
  },
  {
    code: "SK253",
  },
  {
    code: "SG322",
  },
  {
    code: "SK249",
  },
  {
    code: "SG331",
  },
  {
    code: "SK272",
  },
  {
    code: "SA149",
  },
  {
    code: "SK254",
  },
  {
    code: "SK255",
  },
  {
    code: "SA148",
  },
  {
    code: "SK250",
  },
  {
    code: "SK245",
  },
  {
    code: "SA147",
  },
  {
    code: "SK251",
  },
  {
    code: "SA281",
  },
  {
    code: "SA289",
  },
  {
    code: "SA280",
  },
  {
    code: "SA292",
  },
  {
    code: "SA290",
  },
  {
    code: "SA278",
  },
  {
    code: "SA150",
  },
  {
    code: "SA244",
  },
  {
    code: "SA279",
  },
  {
    code: "MR30",
  },
  {
    code: "MR28",
  },
  {
    code: "F7281",
  },
  {
    code: "PASTE1673",
  },
  {
    code: "PASTE1406",
  },
  {
    code: "PASTE1642",
  },
  {
    code: "80219B",
  },
  {
    code: "80219C",
  },
  {
    code: "80219V",
  },
  {
    code: "80219F",
  },
  {
    code: "80219",
  },
  {
    code: "EHTDR",
  },
  {
    code: "1004VI",
  },
  {
    code: "1044VE",
  },
  {
    code: "1044R",
  },
  {
    code: "1004V",
  },
  {
    code: "1004B",
  },
  {
    code: "EASYP",
  },
  {
    code: "TEGR",
  },
  {
    code: "PIFLUR",
  },
  {
    code: "PLGLI",
  },
  {
    code: "10119",
  },
  {
    code: "2371V",
  },
  {
    code: "071L",
  },
  {
    code: "525R",
  },
  {
    code: "2371AM",
  },
  {
    code: "071M",
  },
  {
    code: "2371N",
  },
  {
    code: "2373A",
  },
  {
    code: "2371A",
  },
  {
    code: "2373V",
  },
  {
    code: "1048",
  },
  {
    code: "071S",
  },
  {
    code: "1049",
  },
  {
    code: "2087",
  },
  {
    code: "2208R",
  },
  {
    code: "S1271",
  },
  {
    code: "S1272",
  },
  {
    code: "11189372",
  },
  {
    code: "C184",
  },
  {
    code: "CORFN",
  },
  {
    code: "CCMUN",
  },
  {
    code: "CCNAV",
  },
  {
    code: "710772",
  },
  {
    code: "POMAR",
  },
  {
    code: "POMCN",
  },
  {
    code: "BGS",
  },
  {
    code: "ECX2",
  },
  {
    code: "ECM15",
  },
  {
    code: "LFLA",
  },
  {
    code: "LCAM",
  },
  {
    code: "LPA",
  },
  {
    code: "LMB",
  },
  {
    code: "LNA",
  },
  {
    code: "LUN",
  },
  {
    code: "LMM",
  },
  {
    code: "LTS",
  },
  {
    code: "PLFA",
  },
  {
    code: "PLFVA",
  },
  {
    code: "PLFS",
  },
  {
    code: "71000668",
  },
  {
    code: "710-0520",
  },
  {
    code: "CO1201",
  },
  {
    code: "COM01",
  },
  {
    code: "PCAGP",
  },
  {
    code: "PCRGP",
  },
  {
    code: "PCAZGP",
  },
  {
    code: "PCFGP",
  },
  {
    code: "DCM04",
  },
  {
    code: "PCVGP",
  },
  {
    code: "PCNAGP",
  },
  {
    code: "PCVIGP",
  },
  {
    code: "DCM01",
  },
  {
    code: "PCM10",
  },
  {
    code: "SPCCB",
  },
  {
    code: "RCM15",
  },
  {
    code: "FCPAC",
  },
  {
    code: "SASS",
  },
  {
    code: "SDIN",
  },
  {
    code: "SCAD",
  },
  {
    code: "P1307",
  },
  {
    code: "77302R",
  },
  {
    code: "77302L",
  },
  {
    code: "77302V",
  },
  {
    code: "77302c",
  },
  {
    code: "44015",
  },
  {
    code: "41635",
  },
  {
    code: "S683",
  },
  {
    code: "S619",
  },
  {
    code: "S3206.1",
  },
  {
    code: "CAKEPOP",
  },
  {
    code: "CPN1",
  },
  {
    code: "VTFAZ",
  },
  {
    code: "VTFVM",
  },
  {
    code: "VTFMA",
  },
  {
    code: "VTFGR",
  },
  {
    code: "8147VP",
  },
  {
    code: "128144",
  },
  {
    code: "8147CP",
  },
  {
    code: "8147LP",
  },
  {
    code: "8147RP",
  },
  {
    code: "128143",
  },
  {
    code: "80055",
  },
  {
    code: "AD0174",
  },
  {
    code: "80062",
  },
  {
    code: "603413",
  },
  {
    code: "28863",
  },
  {
    code: "28862",
  },
  {
    code: "1413",
  },
  {
    code: "FLEIBORSUPERP",
  },
  {
    code: "MEBOSI21",
  },
  {
    code: "104038",
  },
  {
    code: "10303G",
  },
  {
    code: "6033",
  },
  {
    code: "28215",
  },
  {
    code: "28214",
  },
  {
    code: "SA117",
  },
  {
    code: "SET49",
  },
  {
    code: "SET26",
  },
  {
    code: "SET23",
  },
  {
    code: "SET27",
  },
  {
    code: "C1372",
  },
  {
    code: "C1368",
  },
  {
    code: "40999",
  },
  {
    code: "813782",
  },
  {
    code: "813775",
  },
  {
    code: "813799",
  },
  {
    code: "610-951",
  },
  {
    code: "FDP1201",
  },
  {
    code: "FDP1202",
  },
  {
    code: "3895C",
  },
  {
    code: "FDPR1201",
  },
  {
    code: "3895R",
  },
  {
    code: "FDPR1202",
  },
  {
    code: "3894L",
  },
  {
    code: "3895L",
  },
  {
    code: "3894V",
  },
  {
    code: "3894C",
  },
  {
    code: "3895V",
  },
  {
    code: "3893L",
  },
  {
    code: "3893V",
  },
  {
    code: "3893R",
  },
  {
    code: "3893C",
  },
  {
    code: "SET20",
  },
  {
    code: "P35",
  },
  {
    code: "P28",
  },
  {
    code: "SET14",
  },
  {
    code: "SET6",
  },
  {
    code: "SET13",
  },
  {
    code: "SET51",
  },
  {
    code: "SET11",
  },
  {
    code: "P033",
  },
  {
    code: "SET1",
  },
  {
    code: "P07",
  },
  {
    code: "P04",
  },
  {
    code: "P042",
  },
  {
    code: "SET2",
  },
  {
    code: "P036",
  },
  {
    code: "P15",
  },
  {
    code: "P21",
  },
  {
    code: "SET4",
  },
  {
    code: "P41",
  },
  {
    code: "P11",
  },
  {
    code: "P30",
  },
  {
    code: "P24",
  },
  {
    code: "P39",
  },
  {
    code: "P34",
  },
  {
    code: "P38",
  },
  {
    code: "P19",
  },
  {
    code: "SET53",
  },
  {
    code: "P22",
  },
  {
    code: "SET9",
  },
  {
    code: "SET50",
  },
  {
    code: "404100",
  },
  {
    code: "PINL4",
  },
  {
    code: "PINL12",
  },
  {
    code: "PINL10",
  },
  {
    code: "PINL2",
  },
  {
    code: "PINL6",
  },
  {
    code: "PINL8",
  },
  {
    code: "10303D",
  },
  {
    code: "10303T",
  },
  {
    code: "DVA074",
  },
  {
    code: "TBD",
  },
  {
    code: "SICO226",
  },
  {
    code: "TLD",
  },
  {
    code: "T15D",
  },
  {
    code: "TM15D",
  },
  {
    code: "TTAD",
  },
  {
    code: "DRAIP",
  },
  {
    code: "793.7CA",
  },
  {
    code: "SICO271",
  },
  {
    code: "VRETRO",
  },
  {
    code: "VFIES",
  },
  {
    code: "PMIXSAN",
  },
  {
    code: "P10H",
  },
  {
    code: "PCLFRO",
  },
  {
    code: "PMIXCP",
  },
  {
    code: "PMIXFRU",
  },
  {
    code: "511",
  },
  {
    code: "I21514T",
  },
  {
    code: "REP2018",
  },
  {
    code: "PPFAM5",
  },
  {
    code: "CAJA18x15K",
  },
  {
    code: "CAJA23x16K",
  },
  {
    code: "CAJA16.5K",
  },
  {
    code: "113CA",
  },
  {
    code: "CAJA17x17x20",
  },
  {
    code: "CAJA12x12x16",
  },
  {
    code: "TSMIP",
  },
  {
    code: "TSMID",
  },
  {
    code: "TSMIRG",
  },
  {
    code: "TFCCPC",
  },
  {
    code: "TFCCNC",
  },
  {
    code: "TFCCRG",
  },
  {
    code: "MSTCD",
  },
  {
    code: "TFCCDC",
  },
  {
    code: "CSSD",
  },
  {
    code: "MR25",
  },
  {
    code: "MR26",
  },
  {
    code: "CSSP",
  },
  {
    code: "CSSN",
  },
  {
    code: "O04MH2",
  },
  {
    code: "O03MH2",
  },
  {
    code: "TAGPAR",
  },
  {
    code: "TAGPA",
  },
  {
    code: "TAGFDC",
  },
  {
    code: "VSTX39",
  },
  {
    code: "114CA",
  },
  {
    code: "122CA",
  },
  {
    code: "COFC",
  },
  {
    code: "COC2",
  },
  {
    code: "952",
  },
  {
    code: "953",
  },
  {
    code: "COC1",
  },
  {
    code: "951",
  },
  {
    code: "1338",
  },
  {
    code: "1321",
  },
  {
    code: "1345",
  },
  {
    code: "34213",
  },
  {
    code: "793CA",
  },
  {
    code: "MR22",
  },
  {
    code: "SC379",
  },
  {
    code: "SB162",
  },
  {
    code: "SK111",
  },
  {
    code: "SW74",
  },
  {
    code: "BP01004",
  },
  {
    code: "BP01021",
  },
  {
    code: "BP01002",
  },
  {
    code: "BP01005",
  },
  {
    code: "BP01003",
  },
  {
    code: "BP26007",
  },
  {
    code: "BP26004",
  },
  {
    code: "BP26006",
  },
  {
    code: "BAMP01",
  },
  {
    code: "BAM01",
  },
  {
    code: "BAM03",
  },
  {
    code: "BAMP02",
  },
  {
    code: "BAMP03",
  },
  {
    code: "BAM02",
  },
  {
    code: "77301L",
  },
  {
    code: "77301N",
  },
  {
    code: "77301V",
  },
  {
    code: "17211",
  },
  {
    code: "5410V",
  },
  {
    code: "MALH",
  },
  {
    code: "77301C",
  },
  {
    code: "77301R",
  },
  {
    code: "5410R",
  },
  {
    code: "C8X4",
  },
  {
    code: "1084D",
  },
  {
    code: "1343F",
  },
  {
    code: "79270",
  },
  {
    code: "21946",
  },
  {
    code: "44014",
  },
  {
    code: "PASTE1277",
  },
  {
    code: "PASTE1222",
  },
  {
    code: "PASTE1260",
  },
  {
    code: "I21360",
  },
  {
    code: "I21367",
  },
  {
    code: "I21361",
  },
  {
    code: "I21363",
  },
  {
    code: "I21421",
  },
  {
    code: "I21366",
  },
  {
    code: "I21362",
  },
  {
    code: "I21365",
  },
  {
    code: "68853C",
  },
  {
    code: "68853R",
  },
  {
    code: "68853V",
  },
  {
    code: "68853L",
  },
  {
    code: "305105",
  },
  {
    code: "68845V",
  },
  {
    code: "68845R",
  },
  {
    code: "68845C",
  },
  {
    code: "68844C",
  },
  {
    code: "68843C",
  },
  {
    code: "68840V",
  },
  {
    code: "68843V",
  },
  {
    code: "68840C",
  },
  {
    code: "68844V",
  },
  {
    code: "68840L",
  },
  {
    code: "68843R",
  },
  {
    code: "68840R",
  },
  {
    code: "68839C",
  },
  {
    code: "68839R",
  },
  {
    code: "68839L",
  },
  {
    code: "68836L",
  },
  {
    code: "68836C",
  },
  {
    code: "68836V",
  },
  {
    code: "7570",
  },
  {
    code: "TC2113",
  },
  {
    code: "TC2112",
  },
  {
    code: "TC2115",
  },
  {
    code: "TC2114",
  },
  {
    code: "R103048",
  },
  {
    code: "R103047",
  },
  {
    code: "I21531",
  },
  {
    code: "I21535",
  },
  {
    code: "I21534",
  },
  {
    code: "I21530",
  },
  {
    code: "I21529",
  },
  {
    code: "I21536",
  },
  {
    code: "I21533",
  },
  {
    code: "5195",
  },
  {
    code: "F01CHEES",
  },
  {
    code: "F02MTART",
  },
  {
    code: "F02O",
  },
  {
    code: "TAGFC",
  },
  {
    code: "TAGFD",
  },
  {
    code: "F01O",
  },
  {
    code: "TRFCC",
  },
  {
    code: "TRFCG",
  },
  {
    code: "TAGNAV",
  },
  {
    code: "TRFCHE",
  },
  {
    code: "TRH",
  },
  {
    code: "TRFCHC",
  },
  {
    code: "TFCHR",
  },
  {
    code: "I21359",
  },
  {
    code: "43294",
  },
  {
    code: "43293",
  },
  {
    code: "Boti052b",
  },
  {
    code: "I21358",
  },
  {
    code: "I21355",
  },
  {
    code: "I21357",
  },
  {
    code: "I21356",
  },
  {
    code: "D5922",
  },
  {
    code: "D5924",
  },
  {
    code: "D5923",
  },
  {
    code: "D6349",
  },
  {
    code: "I21353",
  },
  {
    code: "I21352",
  },
  {
    code: "I21351",
  },
  {
    code: "I21350",
  },
  {
    code: "I21339",
  },
  {
    code: "I21416",
  },
  {
    code: "I21419",
  },
  {
    code: "I21417",
  },
  {
    code: "I21348",
  },
  {
    code: "I21340",
  },
  {
    code: "I21341",
  },
  {
    code: "I21414",
  },
  {
    code: "I21338",
  },
  {
    code: "I21413",
  },
  {
    code: "I21344",
  },
  {
    code: "I21342",
  },
  {
    code: "I21415",
  },
  {
    code: "I21324",
  },
  {
    code: "I21336",
  },
  {
    code: "I21325",
  },
  {
    code: "I21326",
  },
  {
    code: "I21408",
  },
  {
    code: "boti039b",
  },
  {
    code: "I21327",
  },
  {
    code: "I21329",
  },
  {
    code: "I21328",
  },
  {
    code: "I21332",
  },
  {
    code: "TORTA3",
  },
  {
    code: "SET39",
  },
  {
    code: "SET38",
  },
  {
    code: "SA131",
  },
  {
    code: "SET37",
  },
  {
    code: "P10CR",
  },
  {
    code: "P10LFV",
  },
  {
    code: "I21321",
  },
  {
    code: "I21323",
  },
  {
    code: "I21407",
  },
  {
    code: "TDCMPC",
  },
  {
    code: "I21322",
  },
  {
    code: "TDHMPC",
  },
  {
    code: "D6131",
  },
  {
    code: "D6132",
  },
  {
    code: "D6130",
  },
  {
    code: "GLF12",
  },
  {
    code: "GLF13",
  },
  {
    code: "GLF14",
  },
  {
    code: "GLF15",
  },
  {
    code: "210700185",
  },
  {
    code: "210500671",
  },
  {
    code: "S701",
  },
  {
    code: "S515",
  },
  {
    code: "S1209",
  },
  {
    code: "S1260",
  },
  {
    code: "S1239",
  },
  {
    code: "S1266",
  },
  {
    code: "S1265",
  },
  {
    code: "S3170",
  },
  {
    code: "S3218",
  },
  {
    code: "S3220",
  },
  {
    code: "S3219",
  },
  {
    code: "BC1036",
  },
  {
    code: "T0500",
  },
  {
    code: "TFCHCP",
  },
  {
    code: "TFCHEP",
  },
  {
    code: "TFCCP",
  },
  {
    code: "TFCGP",
  },
  {
    code: "TFCHP",
  },
  {
    code: "THBP",
  },
  {
    code: "SA51",
  },
  {
    code: "SA237",
  },
  {
    code: "SL33",
  },
  {
    code: "SL19",
  },
  {
    code: "SL27",
  },
  {
    code: "SL25",
  },
  {
    code: "SL13",
  },
  {
    code: "SA158",
  },
  {
    code: "P02",
  },
  {
    code: "SL30",
  },
  {
    code: "SL28",
  },
  {
    code: "SW115",
  },
  {
    code: "SW201",
  },
  {
    code: "SW216",
  },
  {
    code: "SW324",
  },
  {
    code: "SW298",
  },
  {
    code: "SW284",
  },
  {
    code: "SW29",
  },
  {
    code: "SW104",
  },
  {
    code: "SW145",
  },
  {
    code: "SW105",
  },
  {
    code: "SW140",
  },
  {
    code: "SW76",
  },
  {
    code: "SW85",
  },
  {
    code: "SW148",
  },
  {
    code: "SW75",
  },
  {
    code: "SW69",
  },
  {
    code: "SW155",
  },
  {
    code: "SW231",
  },
  {
    code: "SW17",
  },
  {
    code: "SW66",
  },
  {
    code: "SW157",
  },
  {
    code: "SK220",
  },
  {
    code: "SK06",
  },
  {
    code: "SK219",
  },
  {
    code: "sk208",
  },
  {
    code: "SK203",
  },
  {
    code: "SK35",
  },
  {
    code: "SK151",
  },
  {
    code: "SK08",
  },
  {
    code: "SK84",
  },
  {
    code: "sk63",
  },
  {
    code: "SK213",
  },
  {
    code: "SK218",
  },
  {
    code: "SK263",
  },
  {
    code: "SK264",
  },
  {
    code: "SK64",
  },
  {
    code: "SK62",
  },
  {
    code: "SK215",
  },
  {
    code: "SK265",
  },
  {
    code: "DMD55",
  },
  {
    code: "11002002",
  },
  {
    code: "401408",
  },
  {
    code: "SSHOO",
  },
  {
    code: "318713",
  },
  {
    code: "I21405",
  },
  {
    code: "I21403",
  },
  {
    code: "I21404",
  },
  {
    code: "I21316",
  },
  {
    code: "I21305",
  },
  {
    code: "I21320",
  },
  {
    code: "I21318",
  },
  {
    code: "I21315",
  },
  {
    code: "I21317",
  },
  {
    code: "I21400",
  },
  {
    code: "I21402",
  },
  {
    code: "I21319",
  },
  {
    code: "I21307",
  },
  {
    code: "I21310",
  },
  {
    code: "I21304",
  },
  {
    code: "I21314",
  },
  {
    code: "I21313",
  },
  {
    code: "I21312",
  },
  {
    code: "I21301",
  },
  {
    code: "I21300",
  },
  {
    code: "MR20",
  },
  {
    code: "MR17",
  },
  {
    code: "MR13",
  },
  {
    code: "MR19",
  },
  {
    code: "MR14",
  },
  {
    code: "MR15",
  },
  {
    code: "MR11",
  },
  {
    code: "MR18",
  },
  {
    code: "MR16",
  },
  {
    code: "MR12",
  },
  {
    code: "MR09",
  },
  {
    code: "MR06",
  },
  {
    code: "MR07",
  },
  {
    code: "MR08",
  },
  {
    code: "MR01",
  },
  {
    code: "MR02",
  },
  {
    code: "80216",
  },
  {
    code: "80217",
  },
  {
    code: "I21102",
  },
  {
    code: "I21103",
  },
  {
    code: "I21106",
  },
  {
    code: "I21105",
  },
  {
    code: "I21104",
  },
  {
    code: "I21101",
  },
  {
    code: "I21100",
  },
  {
    code: "DONUTSV+DIV",
  },
  {
    code: "MTARXL",
  },
  {
    code: "5435AM",
  },
  {
    code: "5435R",
  },
  {
    code: "5435V",
  },
  {
    code: "5435A",
  },
  {
    code: "5435VE",
  },
  {
    code: "42075L",
  },
  {
    code: "300262",
  },
  {
    code: "42075V",
  },
  {
    code: "42075N",
  },
  {
    code: "300224",
  },
  {
    code: "506023",
  },
  {
    code: "133021",
  },
  {
    code: "133026",
  },
  {
    code: "71000511",
  },
  {
    code: "SV9101",
  },
  {
    code: "BM1608",
  },
  {
    code: "LM1520",
  },
  {
    code: "WM1901",
  },
  {
    code: "SW1801",
  },
  {
    code: "LI0101",
  },
  {
    code: "ME0101",
  },
  {
    code: "RP5191",
  },
  {
    code: "RP5192",
  },
  {
    code: "CDCV",
  },
  {
    code: "101066",
  },
  {
    code: "101017",
  },
  {
    code: "BOTI015B",
  },
  {
    code: "BA45CD",
  },
  {
    code: "BA50CD",
  },
  {
    code: "YIMANO01",
  },
  {
    code: "16246",
  },
  {
    code: "17146",
  },
  {
    code: "15894",
  },
  {
    code: "17149",
  },
  {
    code: "16263",
  },
  {
    code: "15888",
  },
  {
    code: "P1611",
  },
  {
    code: "19126",
  },
  {
    code: "536L",
  },
  {
    code: "536V",
  },
  {
    code: "16741",
  },
  {
    code: "536R",
  },
  {
    code: "48051",
  },
  {
    code: "10481",
  },
  {
    code: "CAJACC15",
  },
  {
    code: "CAJACM20",
  },
  {
    code: "CAJARBYN20",
  },
  {
    code: "CAJAROCKBYN",
  },
  {
    code: "P10HR",
  },
  {
    code: "P8BARBIEP",
  },
  {
    code: "P54.8",
  },
  {
    code: "P41.8",
  },
  {
    code: "P58.10",
  },
  {
    code: "P41.10",
  },
  {
    code: "P42.10",
  },
  {
    code: "P59.10",
  },
  {
    code: "P38.10",
  },
  {
    code: "CAJAROCK",
  },
  {
    code: "GLOBOPVE",
  },
  {
    code: "CAJACM",
  },
  {
    code: "GLOBTIK",
  },
  {
    code: "BP02101",
  },
  {
    code: "BP26101",
  },
  {
    code: "BP01101",
  },
  {
    code: "11002001",
  },
  {
    code: "BP26001",
  },
  {
    code: "BP01001",
  },
  {
    code: "5360L",
  },
  {
    code: "BP26003",
  },
  {
    code: "946",
  },
  {
    code: "945",
  },
  {
    code: "15602",
  },
  {
    code: "44711",
  },
  {
    code: "100564",
  },
  {
    code: "610-314",
  },
  {
    code: "PROSASFB",
  },
  {
    code: "PSCKRAFT",
  },
  {
    code: "PCIRCOCV",
  },
  {
    code: "PROMBOC",
  },
  {
    code: "PESTREM",
  },
  {
    code: "PBARBIEP",
  },
  {
    code: "MTL1186",
  },
  {
    code: "TNFCG",
  },
  {
    code: "SA70",
  },
  {
    code: "SA152",
  },
  {
    code: "SA84",
  },
  {
    code: "SA80",
  },
  {
    code: "SA223",
  },
  {
    code: "TNHB",
  },
  {
    code: "TDHB",
  },
  {
    code: "SA71",
  },
  {
    code: "SA74",
  },
  {
    code: "SA40",
  },
  {
    code: "SA55",
  },
  {
    code: "SA30",
  },
  {
    code: "SA54",
  },
  {
    code: "SA53",
  },
  {
    code: "SA46",
  },
  {
    code: "SA52",
  },
  {
    code: "SA11",
  },
  {
    code: "SA21",
  },
  {
    code: "SA47",
  },
  {
    code: "SA04",
  },
  {
    code: "SA03",
  },
  {
    code: "SA33",
  },
  {
    code: "SA34",
  },
  {
    code: "SA35",
  },
  {
    code: "SA31",
  },
  {
    code: "901053",
  },
  {
    code: "AX20520",
  },
  {
    code: "211326",
  },
  {
    code: "GUANTV",
  },
  {
    code: "GUANTR",
  },
  {
    code: "10306",
  },
  {
    code: "65459",
  },
  {
    code: "PA001",
  },
  {
    code: "MMbudin",
  },
  {
    code: "7063",
  },
  {
    code: "7574ve",
  },
  {
    code: "7574neg",
  },
  {
    code: "7574Gri",
  },
  {
    code: "7134",
  },
  {
    code: "7574ro",
  },
  {
    code: "7135",
  },
  {
    code: "AX2026",
  },
  {
    code: "4107",
  },
  {
    code: "42916",
  },
  {
    code: "42920",
  },
  {
    code: "N8752030",
  },
  {
    code: "676580",
  },
  {
    code: "676581",
  },
  {
    code: "P011880",
  },
  {
    code: "41729",
  },
  {
    code: "48081",
  },
  {
    code: "838014",
  },
  {
    code: "145952",
  },
  {
    code: "GLF09",
  },
  {
    code: "GLF11",
  },
  {
    code: "GLF10",
  },
  {
    code: "VI808",
  },
  {
    code: "SILIBX9",
  },
  {
    code: "SILIR13",
  },
  {
    code: "F1806",
  },
  {
    code: "404098",
  },
  {
    code: "404097",
  },
  {
    code: "45191",
  },
  {
    code: "90121",
  },
  {
    code: "FPETF.ROSA",
  },
  {
    code: "19071343",
  },
  {
    code: "PPFVE5",
  },
  {
    code: "PPFAZ5",
  },
  {
    code: "DM4686",
  },
  {
    code: "PPFVI5",
  },
  {
    code: "PPFNA5",
  },
  {
    code: "DM4543",
  },
  {
    code: "CAJA18x15",
  },
  {
    code: "CAJA16.5",
  },
  {
    code: "CAJA15x10x1",
  },
  {
    code: "SAHP9",
  },
  {
    code: "SACONEJO",
  },
  {
    code: "SAFP",
  },
  {
    code: "SAHP6",
  },
  {
    code: "SAA",
  },
  {
    code: "SK120",
  },
  {
    code: "5017",
  },
  {
    code: "SK114",
  },
  {
    code: "SK113",
  },
  {
    code: "SK116",
  },
  {
    code: "39343",
  },
  {
    code: "N8752026",
  },
  {
    code: "PALLENTCELX0.5",
  },
  {
    code: "AX91",
  },
  {
    code: "MIXPRE",
  },
  {
    code: "1352UI",
  },
  {
    code: "AF506522",
  },
  {
    code: "SDONAG",
  },
  {
    code: "586746",
  },
  {
    code: "STX24",
  },
  {
    code: "2105967",
  },
  {
    code: "SILIAVENX4",
  },
  {
    code: "4181123",
  },
  {
    code: "MTL1182",
  },
  {
    code: "3294203",
  },
  {
    code: "336C",
  },
  {
    code: "SET8",
  },
  {
    code: "QUESOM",
  },
  {
    code: "942",
  },
  {
    code: "JB2742M",
  },
  {
    code: "JB2742C",
  },
  {
    code: "PS3040",
  },
  {
    code: "JB2742G",
  },
  {
    code: "MH1",
  },
  {
    code: "TH1",
  },
  {
    code: "ESP0329",
  },
  {
    code: "REJ0810",
  },
  {
    code: "TOPPYLY",
  },
  {
    code: "TFCCN",
  },
  {
    code: "TFCHE",
  },
  {
    code: "TFCHC",
  },
  {
    code: "TFCHN",
  },
  {
    code: "TOPPJLP",
  },
  {
    code: "TOPPFDIA",
  },
  {
    code: "TOPPSMI",
  },
  {
    code: "TOPPBDE",
  },
  {
    code: "TOPPALL",
  },
  {
    code: "TOPPDES",
  },
  {
    code: "TOPPVIVE",
  },
  {
    code: "TOPPLOVE",
  },
  {
    code: "TOPPSIEM",
  },
  {
    code: "TOPPBE",
  },
  {
    code: "TOPPFY",
  },
  {
    code: "PORTAGLCB",
  },
  {
    code: "PORTAGLX7",
  },
  {
    code: "TOPPLP",
  },
  {
    code: "TOPPCH",
  },
  {
    code: "PORTAGLM",
  },
  {
    code: "PORTAGLEN",
  },
  {
    code: "GLOBOBT",
  },
  {
    code: "952769",
  },
  {
    code: "952776",
  },
  {
    code: "952332",
  },
  {
    code: "TOPPFCH",
  },
  {
    code: "hola50",
  },
  {
    code: "TOPPDD",
  },
  {
    code: "hola30",
  },
  {
    code: "TOPPCD",
  },
  {
    code: "TOPPMD",
  },
  {
    code: "hola40",
  },
  {
    code: "TOPCZD",
  },
  {
    code: "TOPPFCC",
  },
  {
    code: "holacin",
  },
  {
    code: "holatre",
  },
  {
    code: "holacua",
  },
  {
    code: "TOPPFC",
  },
  {
    code: "SILIPASTO",
  },
  {
    code: "SILIHYH",
  },
  {
    code: "DM4140",
  },
  {
    code: "PMBN",
  },
  {
    code: "106040",
  },
  {
    code: "BUDIN5",
  },
  {
    code: "3DAUS",
  },
  {
    code: "CAJABUD",
  },
  {
    code: "CAJADIVNAV",
  },
  {
    code: "210500145",
  },
  {
    code: "210500067",
  },
  {
    code: "210500070",
  },
  {
    code: "210500149",
  },
  {
    code: "210500146",
  },
  {
    code: "210500071",
  },
  {
    code: "210500066",
  },
  {
    code: "P031",
  },
  {
    code: "P016",
  },
  {
    code: "SP018",
  },
  {
    code: "21050070",
  },
  {
    code: "210400019",
  },
  {
    code: "230800223",
  },
  {
    code: "P025",
  },
  {
    code: "P01",
  },
  {
    code: "SW307",
  },
  {
    code: "SW308",
  },
  {
    code: "SW09",
  },
  {
    code: "SW306",
  },
  {
    code: "SW200",
  },
  {
    code: "SW82",
  },
  {
    code: "SW229",
  },
  {
    code: "SW230",
  },
  {
    code: "SW217",
  },
  {
    code: "SW152",
  },
  {
    code: "SA58",
  },
  {
    code: "SA132",
  },
  {
    code: "SA64",
  },
  {
    code: "SA57",
  },
  {
    code: "SW158",
  },
  {
    code: "SA22",
  },
  {
    code: "SA144",
  },
  {
    code: "SW168",
  },
  {
    code: "SA62",
  },
  {
    code: "SA118",
  },
  {
    code: "SK32",
  },
  {
    code: "SA143",
  },
  {
    code: "SK43",
  },
  {
    code: "SK201",
  },
  {
    code: "SK34",
  },
  {
    code: "SK37",
  },
  {
    code: "SK13",
  },
  {
    code: "SK44",
  },
  {
    code: "SK180",
  },
  {
    code: "sk160",
  },
  {
    code: "sk28",
  },
  {
    code: "sk25",
  },
  {
    code: "sk214",
  },
  {
    code: "sk207",
  },
  {
    code: "sk31",
  },
  {
    code: "sk179",
  },
  {
    code: "sk205",
  },
  {
    code: "SK83",
  },
  {
    code: "sk236",
  },
  {
    code: "SK89",
  },
  {
    code: "SK217",
  },
  {
    code: "sk206",
  },
  {
    code: "SK181",
  },
  {
    code: "sk96",
  },
  {
    code: "SET19",
  },
  {
    code: "SK45",
  },
  {
    code: "OB10SS",
  },
  {
    code: "SK81",
  },
  {
    code: "Sk56",
  },
  {
    code: "sk79",
  },
  {
    code: "sk52",
  },
  {
    code: "SK46",
  },
  {
    code: "MTL1183",
  },
  {
    code: "DSPP050",
  },
  {
    code: "634805",
  },
  {
    code: "S31912",
  },
  {
    code: "S31913",
  },
  {
    code: "S729",
  },
  {
    code: "STX1",
  },
  {
    code: "S31911",
  },
  {
    code: "S694",
  },
  {
    code: "S731",
  },
  {
    code: "S31893",
  },
  {
    code: "STX2",
  },
  {
    code: "ESCHOCO",
  },
  {
    code: "S31891",
  },
  {
    code: "S3192",
  },
  {
    code: "Silisavnc",
  },
  {
    code: "mcake20",
  },
  {
    code: "103015",
  },
  {
    code: "hexamid12",
  },
  {
    code: "4171199",
  },
  {
    code: "Bm0748",
  },
  {
    code: "103012",
  },
  {
    code: "Silipanal",
  },
  {
    code: "D10RGS",
  },
  {
    code: "44074",
  },
  {
    code: "siliformas",
  },
  {
    code: "33071",
  },
  {
    code: "Hidroverh",
  },
  {
    code: "Hidrotur",
  },
  {
    code: "Hidrolila",
  },
  {
    code: "Hidroverv",
  },
  {
    code: "Hidroverl",
  },
  {
    code: "Hidroviop",
  },
  {
    code: "Hidrocel",
  },
  {
    code: "Hidrorosat",
  },
  {
    code: "Hidrorojoc",
  },
  {
    code: "Hidronskin",
  },
  {
    code: "Hidrobor",
  },
  {
    code: "Hidroazb",
  },
  {
    code: "Hidroazm",
  },
  {
    code: "Hidroana",
  },
  {
    code: "MMGZ",
  },
  {
    code: "7107887",
  },
  {
    code: "7107886",
  },
  {
    code: "101985",
  },
  {
    code: "bcollvdem",
  },
  {
    code: "BCOLLAMA",
  },
  {
    code: "bcollmar",
  },
  {
    code: "BCOLLLILA",
  },
  {
    code: "bcollman",
  },
  {
    code: "BCOLLROJ",
  },
  {
    code: "BCOLLAZU",
  },
  {
    code: "BCOLLROSA",
  },
  {
    code: "bcollvdel",
  },
  {
    code: "44308",
  },
  {
    code: "79182",
  },
  {
    code: "35538",
  },
  {
    code: "Silic16x16",
  },
  {
    code: "Pun.39",
  },
  {
    code: "41728",
  },
  {
    code: "41727",
  },
  {
    code: "silioreo6",
  },
  {
    code: "P36.10",
  },
  {
    code: "4172582",
  },
  {
    code: "4172581",
  },
  {
    code: "ax1011x20",
  },
  {
    code: "PAR15",
  },
  {
    code: "44418",
  },
  {
    code: "BD14X2",
  },
  {
    code: "BD16X2",
  },
  {
    code: "C1371",
  },
  {
    code: "4206811",
  },
  {
    code: "BCOLSAL",
  },
  {
    code: "BCOLVH",
  },
  {
    code: "BCOLPLAT",
  },
  {
    code: "BCOLCOR",
  },
  {
    code: "BCOLBOR",
  },
  {
    code: "BCOLTU",
  },
  {
    code: "BCOLLI",
  },
  {
    code: "BCOLAMA",
  },
  {
    code: "BR0036",
  },
  {
    code: "BCOLAMAP",
  },
  {
    code: "7107886",
  },
  {
    code: "210500417",
  },
  {
    code: "21054820",
  },
  {
    code: "2105979",
  },
  {
    code: "21050615",
  },
  {
    code: "210500416",
  },
  {
    code: "67135",
  },
  {
    code: "S458",
  },
  {
    code: "318712",
  },
  {
    code: "318711",
  },
  {
    code: "PICOGLA",
  },
  {
    code: "S681",
  },
  {
    code: "TARS",
  },
  {
    code: "COCORA",
  },
  {
    code: "12753",
  },
  {
    code: "HARALM",
  },
  {
    code: "PPP0123",
  },
  {
    code: "940413",
  },
  {
    code: "44074",
  },
  {
    code: "350052",
  },
  {
    code: "38545",
  },
  {
    code: "106K49",
  },
  {
    code: "106I83",
  },
  {
    code: "106J39",
  },
  {
    code: "CHIPSA",
  },
  {
    code: "CHIPL",
  },
  {
    code: "CHIPB",
  },
  {
    code: "129535",
  },
  {
    code: "129529",
  },
  {
    code: "129528",
  },
  {
    code: "COM",
  },
  {
    code: "105051",
  },
  {
    code: "105083",
  },
  {
    code: "106I84",
  },
  {
    code: "110247",
  },
  {
    code: "101A13",
  },
  {
    code: "110248",
  },
  {
    code: "504104",
  },
  {
    code: "4196562",
  },
  {
    code: "4196563",
  },
  {
    code: "PAN35",
  },
  {
    code: "W2094117",
  },
  {
    code: "6809",
  },
  {
    code: "6800",
  },
  {
    code: "7121",
  },
  {
    code: "7124",
  },
  {
    code: "7128",
  },
  {
    code: "7127",
  },
  {
    code: "7126",
  },
  {
    code: "7130",
  },
  {
    code: "SILMARGA",
  },
  {
    code: "CHINCACTUS",
  },
  {
    code: "SILRAYITO",
  },
  {
    code: "PASTE8002",
  },
  {
    code: "503221M",
  },
  {
    code: "4196672",
  },
  {
    code: "NIC250",
  },
  {
    code: "YIPLAGIRECO",
  },
  {
    code: "GLKM02",
  },
  {
    code: "6606",
  },
  {
    code: "3187.8",
  },
  {
    code: "BM0238",
  },
  {
    code: "3187.3",
  },
  {
    code: "3187.1",
  },
  {
    code: "DRG10",
  },
  {
    code: "DISC1S",
  },
  {
    code: "DISC12",
  },
  {
    code: "7103626",
  },
  {
    code: "CAKE20",
  },
  {
    code: "HEXADES25",
  },
  {
    code: "REP2005",
  },
  {
    code: "3200860",
  },
  {
    code: "VTSB",
  },
  {
    code: "PVTR64",
  },
  {
    code: "503222",
  },
  {
    code: "4196541",
  },
  {
    code: "4196593",
  },
  {
    code: "4196580",
  },
  {
    code: "104123",
  },
  {
    code: "3294201",
  },
  {
    code: "SILICOPI",
  },
  {
    code: "SMGAT",
  },
  {
    code: "VT6RI",
  },
  {
    code: "VT6BO",
  },
  {
    code: "390041",
  },
  {
    code: "7026016",
  },
  {
    code: "DELY17CV",
  },
  {
    code: "paste150",
  },
  {
    code: "DELY17SV",
  },
  {
    code: "YIMEDL",
  },
  {
    code: "16750",
  },
  {
    code: "16755",
  },
  {
    code: "16754",
  },
  {
    code: "16753",
  },
  {
    code: "ALAMBREVDE18",
  },
  {
    code: "AX0691",
  },
  {
    code: "COT4824",
  },
  {
    code: "COT4825",
  },
  {
    code: "COT4823",
  },
  {
    code: "Glitplata",
  },
  {
    code: "38551",
  },
  {
    code: "WI208016",
  },
  {
    code: "34851",
  },
  {
    code: "7473",
  },
  {
    code: "44149",
  },
  {
    code: "7795522",
  },
  {
    code: "30665",
  },
  {
    code: "23598",
  },
  {
    code: "25218",
  },
  {
    code: "30667",
  },
  {
    code: "25217",
  },
  {
    code: "21338",
  },
  {
    code: "16736",
  },
  {
    code: "COA0200",
  },
  {
    code: "2105-950",
  },
  {
    code: "38546",
  },
  {
    code: "PASTE101",
  },
  {
    code: "940411",
  },
  {
    code: "COT8069",
  },
  {
    code: "COT4821",
  },
  {
    code: "COT4822",
  },
  {
    code: "COT4820",
  },
  {
    code: "SILIDELF",
  },
  {
    code: "002D5",
  },
  {
    code: "SGP104",
  },
  {
    code: "SET46",
  },
  {
    code: "SGP107",
  },
  {
    code: "SGP86",
  },
  {
    code: "SA186",
  },
  {
    code: "SA203",
  },
  {
    code: "SET42",
  },
  {
    code: "SET44",
  },
  {
    code: "SET43",
  },
  {
    code: "SA188",
  },
  {
    code: "SET45",
  },
  {
    code: "SA116",
  },
  {
    code: "SA113",
  },
  {
    code: "SA114",
  },
  {
    code: "P026",
  },
  {
    code: "COOKIES5",
  },
  {
    code: "COOKIES4",
  },
  {
    code: "COOKIES1",
  },
  {
    code: "NAV70",
  },
  {
    code: "COOKIES8",
  },
  {
    code: "COOKIES2",
  },
  {
    code: "COOKIES3",
  },
  {
    code: "CAPI1",
  },
  {
    code: "ALAMBREVER28",
  },
  {
    code: "2371875",
  },
  {
    code: "415801",
  },
  {
    code: "40862",
  },
  {
    code: "30666",
  },
  {
    code: "38549",
  },
  {
    code: "30009",
  },
  {
    code: "35571",
  },
  {
    code: "35569",
  },
  {
    code: "35572",
  },
  {
    code: "30664",
  },
  {
    code: "SW83",
  },
  {
    code: "SW60",
  },
  {
    code: "SW84",
  },
  {
    code: "SW202",
  },
  {
    code: "SW297",
  },
  {
    code: "SW138",
  },
  {
    code: "SW224",
  },
  {
    code: "SW159",
  },
  {
    code: "SW146",
  },
  {
    code: "SW278",
  },
  {
    code: "SW160",
  },
  {
    code: "SR103",
  },
  {
    code: "SW136",
  },
  {
    code: "SK224",
  },
  {
    code: "SK53",
  },
  {
    code: "SK227",
  },
  {
    code: "SK82",
  },
  {
    code: "SK212",
  },
  {
    code: "SK222",
  },
  {
    code: "SK225",
  },
  {
    code: "SGP82",
  },
  {
    code: "SK161",
  },
  {
    code: "SK133",
  },
  {
    code: "SGP96",
  },
  {
    code: "SK158",
  },
  {
    code: "SGP94",
  },
  {
    code: "SGP80",
  },
  {
    code: "SGP15",
  },
  {
    code: "SGP56",
  },
  {
    code: "SGP31",
  },
  {
    code: "MID32",
  },
  {
    code: "RODI",
  },
  {
    code: "MID25",
  },
  {
    code: "SGP100",
  },
  {
    code: "SG158",
  },
  {
    code: "SA169",
  },
  {
    code: "DONUTS",
  },
  {
    code: "MTAR",
  },
  {
    code: "COXXL",
  },
  {
    code: "MID12",
  },
  {
    code: "7105352",
  },
  {
    code: "PG.CE",
  },
  {
    code: "ARGCERCHOMUL100",
  },
  {
    code: "95484",
  },
  {
    code: "40284",
  },
  {
    code: "100S",
  },
  {
    code: "34808",
  },
  {
    code: "4196713",
  },
  {
    code: "4196714",
  },
  {
    code: "38547",
  },
  {
    code: "40282",
  },
  {
    code: "38550",
  },
  {
    code: "YIPAL31A",
  },
  {
    code: "SILIOVAL",
  },
  {
    code: "SIYES",
  },
  {
    code: "SILISIRENA",
  },
  {
    code: "S806",
  },
  {
    code: "PLACATEX1",
  },
  {
    code: "SILIDONA",
  },
  {
    code: "42555",
  },
  {
    code: "42196",
  },
  {
    code: "42798",
  },
  {
    code: "P08034",
  },
  {
    code: "PIR5009X8C",
  },
  {
    code: "DISC14",
  },
  {
    code: "BB332",
  },
  {
    code: "DBRP20",
  },
  {
    code: "13941",
  },
  {
    code: "25076",
  },
  {
    code: "35544",
  },
  {
    code: "CHINMAQ",
  },
  {
    code: "SILIMANO",
  },
  {
    code: "SILINAVIDAD",
  },
  {
    code: "DQ2413",
  },
  {
    code: "CAPI8",
  },
  {
    code: "CAPI6",
  },
  {
    code: "CAPI17",
  },
  {
    code: "CAPI16",
  },
  {
    code: "AX17030",
  },
  {
    code: "7103624",
  },
  {
    code: "7103621",
  },
  {
    code: "7103625",
  },
  {
    code: "7103627",
  },
  {
    code: "23085023",
  },
  {
    code: "7106683",
  },
  {
    code: "4196540",
  },
  {
    code: "4196544",
  },
  {
    code: "4191516G",
  },
  {
    code: "4196545",
  },
  {
    code: "4196554",
  },
  {
    code: "104195",
  },
  {
    code: "4196553",
  },
  {
    code: "4186298",
  },
  {
    code: "4191516B",
  },
  {
    code: "4191516A",
  },
  {
    code: "FUDOR3",
  },
  {
    code: "3294202",
  },
  {
    code: "3294200",
  },
  {
    code: "CHEESS",
  },
  {
    code: "MALVABUFFYFRESA",
  },
  {
    code: "S127",
  },
  {
    code: "41354",
  },
  {
    code: "B0789",
  },
  {
    code: "YDGC197",
  },
  {
    code: "1907-1363",
  },
  {
    code: "GF22",
  },
  {
    code: "CAPI2",
  },
  {
    code: "CAPI4",
  },
  {
    code: "FLANFLOR - 3294",
  },
  {
    code: "1907-1350",
  },
  {
    code: "41774",
  },
  {
    code: "4171005",
  },
  {
    code: "A69004",
  },
  {
    code: "1719C",
  },
  {
    code: "ZAPATOCH",
  },
  {
    code: "zapatoacri",
  },
  {
    code: "3260060",
  },
  {
    code: "PG.NE",
  },
  {
    code: "PG.RO",
  },
  {
    code: "PG.BL",
  },
  {
    code: "PG.AZN",
  },
  {
    code: "CINTAEM",
  },
  {
    code: "S451",
  },
  {
    code: "S452",
  },
  {
    code: "02-0-0009",
  },
  {
    code: "02-0-0001",
  },
  {
    code: "503221-3",
  },
  {
    code: "1907-1088",
  },
  {
    code: "1.10E+16",
  },
  {
    code: "RP5190",
  },
  {
    code: "SWEETANA",
  },
  {
    code: "SWQCR",
  },
  {
    code: "SWMEN",
  },
  {
    code: "SWEETCARA",
  },
  {
    code: "SC310",
  },
  {
    code: "SH158",
  },
  {
    code: "SH157",
  },
  {
    code: "NEONNARA",
  },
  {
    code: "007f2",
  },
  {
    code: "7103623",
  },
  {
    code: "710-3622",
  },
  {
    code: "3DBA",
  },
  {
    code: "paste751",
  },
  {
    code: "paste130",
  },
  {
    code: "paste126",
  },
  {
    code: "PASTE127",
  },
  {
    code: "PASTE553",
  },
  {
    code: "paste584",
  },
  {
    code: "paste125",
  },
  {
    code: "paste129",
  },
  {
    code: "paste112",
  },
  {
    code: "paste115",
  },
  {
    code: "PASTE110",
  },
  {
    code: "paste109",
  },
  {
    code: "paste116",
  },
  {
    code: "paste111",
  },
  {
    code: "paste107",
  },
  {
    code: "REJI",
  },
  {
    code: "paste106",
  },
  {
    code: "spx3",
  },
  {
    code: "DELICLASS",
  },
  {
    code: "TORTAFLOR - 329",
  },
  {
    code: "504101",
  },
  {
    code: "504102",
  },
  {
    code: "503221.2",
  },
  {
    code: "CAKE11",
  },
  {
    code: "39728",
  },
  {
    code: "OREOMDE",
  },
  {
    code: "CHIBLAN",
  },
  {
    code: "s750",
  },
  {
    code: "009P3",
  },
  {
    code: "SK186",
  },
  {
    code: "SK189",
  },
  {
    code: "SK184",
  },
  {
    code: "SK185",
  },
  {
    code: "008U3",
  },
  {
    code: "007Y2",
  },
  {
    code: "23001700",
  },
  {
    code: "h1c",
  },
  {
    code: "3260050",
  },
  {
    code: "3260060",
  },
  {
    code: "h1",
  },
  {
    code: "MH2",
  },
  {
    code: "PC340A",
  },
  {
    code: "GREALVIOLET",
  },
  {
    code: "GREALAZU",
  },
  {
    code: "rep2020",
  },
  {
    code: "SGUIT5",
  },
  {
    code: "DRIP12",
  },
  {
    code: "TULIBLPR",
  },
  {
    code: "ChintPRm15",
  },
  {
    code: "chintpr7b",
  },
  {
    code: "PR20",
  },
  {
    code: "ChintPRm14",
  },
  {
    code: "S709",
  },
  {
    code: "COT0585",
  },
  {
    code: "cot0660",
  },
  {
    code: "COT0721",
  },
  {
    code: "COT0684",
  },
  {
    code: "COT0363",
  },
  {
    code: "COT0615",
  },
  {
    code: "COT0295",
  },
  {
    code: "COT0691",
  },
  {
    code: "COT1100",
  },
  {
    code: "COT0646",
  },
  {
    code: "COT0325",
  },
  {
    code: "COT0318",
  },
  {
    code: "GUPL10",
  },
  {
    code: "GUT04",
  },
  {
    code: "GUT09",
  },
  {
    code: "GUT07",
  },
  {
    code: "COT1391",
  },
  {
    code: "COT1377",
  },
  {
    code: "COT0608",
  },
  {
    code: "COT0592",
  },
  {
    code: "GUT10",
  },
  {
    code: "COT0714",
  },
  {
    code: "GUT11",
  },
  {
    code: "CHINT3DCOR",
  },
  {
    code: "CHINT3DCNA",
  },
  {
    code: "C1274",
  },
  {
    code: "ZAPPLAT",
  },
  {
    code: "C1217",
  },
  {
    code: "C1276",
  },
  {
    code: "CHINT3DCSA",
  },
  {
    code: "CHINT3DKT",
  },
  {
    code: "C1216",
  },
  {
    code: "CHINTB892",
  },
  {
    code: "CHINT2250",
  },
  {
    code: "placahue40",
  },
  {
    code: "CHINPL1",
  },
  {
    code: "placahue30",
  },
  {
    code: "DES4557",
  },
  {
    code: "big12",
  },
  {
    code: "23083803",
  },
  {
    code: "23080948",
  },
  {
    code: "2103325",
  },
  {
    code: "2103324",
  },
  {
    code: "4172574",
  },
  {
    code: "4171661",
  },
  {
    code: "23080092",
  },
  {
    code: "7107653",
  },
  {
    code: "23081125",
  },
  {
    code: "23080946",
  },
  {
    code: "23080915",
  },
  {
    code: "7107287",
  },
  {
    code: "7107290",
  },
  {
    code: "7107283",
  },
  {
    code: "7107289",
  },
  {
    code: "7104105",
  },
  {
    code: "7107284",
  },
  {
    code: "7104090",
  },
  {
    code: "7104091",
  },
  {
    code: "7104104",
  },
  {
    code: "7104088",
  },
  {
    code: "7104114",
  },
  {
    code: "7104087",
  },
  {
    code: "7104092",
  },
  {
    code: "7104086",
  },
  {
    code: "710041",
  },
  {
    code: "7104089",
  },
  {
    code: "CARTBGS",
  },
  {
    code: "CARTBGM",
  },
  {
    code: "SW43",
  },
  {
    code: "Flipo.07",
  },
  {
    code: "Flipo.10",
  },
  {
    code: "FLIPO.06",
  },
  {
    code: "Flipo.08",
  },
  {
    code: "Flipo.09",
  },
  {
    code: "P08",
  },
  {
    code: "SW209",
  },
  {
    code: "P09",
  },
  {
    code: "P06",
  },
  {
    code: "P03",
  },
  {
    code: "P05",
  },
  {
    code: "SW03",
  },
  {
    code: "SW183",
  },
  {
    code: "SW122",
  },
  {
    code: "SGP67",
  },
  {
    code: "SGP43",
  },
  {
    code: "SC79",
  },
  {
    code: "SGP65",
  },
  {
    code: "DISC4",
  },
  {
    code: "CHINT0637",
  },
  {
    code: "CHINT8969",
  },
  {
    code: "CHINT0606",
  },
  {
    code: "CHINT6640",
  },
  {
    code: "DT3090",
  },
  {
    code: "CHINT0613",
  },
  {
    code: "CHINT0873",
  },
  {
    code: "CHINT0897",
  },
  {
    code: "MK105077",
  },
  {
    code: "MK105075",
  },
  {
    code: "MK106D69",
  },
  {
    code: "Af106003",
  },
  {
    code: "Af105008",
  },
  {
    code: "Af108002",
  },
  {
    code: "af106203",
  },
  {
    code: "Af201002",
  },
  {
    code: "ChintSet2",
  },
  {
    code: "jarra",
  },
  {
    code: "LV007",
  },
  {
    code: "AS008",
  },
  {
    code: "CA003gr",
  },
  {
    code: "RC002",
  },
  {
    code: "RG006",
  },
  {
    code: "NS005",
  },
  {
    code: "BL001",
  },
  {
    code: "AQ004",
  },
  {
    code: "chintTP",
  },
  {
    code: "fv9-14-10",
  },
  {
    code: "chintlap",
  },
  {
    code: "PRM16",
  },
  {
    code: "ca9025",
  },
  {
    code: "ax333",
  },
  {
    code: "SP01",
  },
  {
    code: "CPR7",
  },
  {
    code: "ChintPRM9",
  },
  {
    code: "S454",
  },
  {
    code: "PRM3",
  },
  {
    code: "ChintPRM7",
  },
  {
    code: "S456",
  },
  {
    code: "S130",
  },
  {
    code: "S128",
  },
  {
    code: "S129",
  },
  {
    code: "S664",
  },
  {
    code: "chint2012",
  },
  {
    code: "MZ",
  },
  {
    code: "chint640",
  },
  {
    code: "2105-6082",
  },
  {
    code: "19071094",
  },
  {
    code: "SA179",
  },
  {
    code: "1907-1095",
  },
  {
    code: "SA183",
  },
  {
    code: "1907-1096",
  },
  {
    code: "SA184",
  },
  {
    code: "SA181",
  },
  {
    code: "SA182",
  },
  {
    code: "SA180",
  },
  {
    code: "AX2010",
  },
  {
    code: "ax2057",
  },
  {
    code: "S644",
  },
  {
    code: "sw89",
  },
  {
    code: "sa139",
  },
  {
    code: "sc182",
  },
  {
    code: "sw215",
  },
  {
    code: "sw214",
  },
  {
    code: "sw156",
  },
  {
    code: "sr105",
  },
  {
    code: "sa60",
  },
  {
    code: "sr102",
  },
  {
    code: "sr50",
  },
  {
    code: "sr104",
  },
  {
    code: "sa161",
  },
  {
    code: "sa65",
  },
  {
    code: "sr27",
  },
  {
    code: "sr17",
  },
  {
    code: "sr68",
  },
  {
    code: "sk47",
  },
  {
    code: "sr28",
  },
  {
    code: "sk85",
  },
  {
    code: "sk73",
  },
  {
    code: "sk167",
  },
  {
    code: "sk146",
  },
  {
    code: "sk157",
  },
  {
    code: "sk130",
  },
  {
    code: "sk97",
  },
  {
    code: "SK102",
  },
  {
    code: "SK105",
  },
  {
    code: "pezkoi",
  },
  {
    code: "ch16089",
  },
  {
    code: "S3169",
  },
  {
    code: "2105-956",
  },
  {
    code: "S654",
  },
  {
    code: "S3161",
  },
  {
    code: "4160882",
  },
  {
    code: "DZ.03",
  },
  {
    code: "CH0203",
  },
  {
    code: "pirohaw",
  },
  {
    code: "pirohaw8",
  },
  {
    code: "wincopops",
  },
  {
    code: "COXXXL",
  },
  {
    code: "TF1515",
  },
  {
    code: "tester",
  },
  {
    code: "PAR19",
  },
  {
    code: "PAR23",
  },
  {
    code: "504103",
  },
  {
    code: "504105",
  },
  {
    code: "capi13",
  },
  {
    code: "rep5082",
  },
  {
    code: "YI2535",
  },
  {
    code: "rep5072",
  },
  {
    code: "unicx7",
  },
  {
    code: "ax2059",
  },
  {
    code: "Dropshuesitos",
  },
  {
    code: "Ax2000",
  },
  {
    code: "MCY6",
  },
  {
    code: "TARS",
  },
  {
    code: "21050911",
  },
  {
    code: "Wilcorzx2",
  },
  {
    code: "2105957",
  },
  {
    code: "2105-958",
  },
  {
    code: "rep5067",
  },
  {
    code: "box42x32",
  },
  {
    code: "CK12M",
  },
  {
    code: "sw277",
  },
  {
    code: "SA168",
  },
  {
    code: "SA166",
  },
  {
    code: "SA59",
  },
  {
    code: "3294330",
  },
  {
    code: "503226",
  },
  {
    code: "MMBAE",
  },
  {
    code: "MMBA",
  },
  {
    code: "BUDINFLOR - 329",
  },
  {
    code: "S450",
  },
  {
    code: "S439",
  },
  {
    code: "S317",
  },
  {
    code: "S449",
  },
  {
    code: "S653",
  },
  {
    code: "S448",
  },
  {
    code: "S651",
  },
  {
    code: "Tar",
  },
  {
    code: "CoXs",
  },
  {
    code: "CoXm",
  },
  {
    code: "COXL",
  },
  {
    code: "CoXxm",
  },
  {
    code: "12Cup",
  },
  {
    code: "Drip25",
  },
  {
    code: "Drip32",
  },
  {
    code: "4171089",
  },
  {
    code: "acrirosa",
  },
  {
    code: "rep4008",
  },
  {
    code: "SET30",
  },
  {
    code: "SET32",
  },
  {
    code: "set25",
  },
  {
    code: "SET22",
  },
  {
    code: "SET35",
  },
  {
    code: "setsten.18",
  },
  {
    code: "SET7",
  },
  {
    code: "SET15",
  },
  {
    code: "setsten.6",
  },
  {
    code: "setsten.20",
  },
  {
    code: "setsten.13",
  },
  {
    code: "SET5",
  },
  {
    code: "Rep5017",
  },
  {
    code: "Rep5060",
  },
  {
    code: "Rep5092",
  },
  {
    code: "SWCHB",
  },
  {
    code: "Rep5057",
  },
  {
    code: "XD2114",
  },
  {
    code: "1907-1345",
  },
  {
    code: "cucu",
  },
  {
    code: "fv91211",
  },
  {
    code: "S611",
  },
  {
    code: "S623",
  },
  {
    code: "S638",
  },
  {
    code: "S609",
  },
  {
    code: "S622",
  },
  {
    code: "S625",
  },
  {
    code: "4176106",
  },
  {
    code: "104014",
  },
  {
    code: "S649",
  },
  {
    code: "S648",
  },
  {
    code: "S647",
  },
  {
    code: "SPIR12",
  },
  {
    code: "T08",
  },
  {
    code: "papelmante",
  },
  {
    code: "rep4001",
  },
  {
    code: "t09",
  },
  {
    code: "MCY1",
  },
  {
    code: "MCY0",
  },
  {
    code: "MCY5",
  },
  {
    code: "yipal43a",
  },
  {
    code: "MCY3",
  },
  {
    code: "MCY4",
  },
  {
    code: "MCY2",
  },
  {
    code: "batix3",
  },
  {
    code: "S3167",
  },
  {
    code: "S3166",
  },
  {
    code: "rep5052",
  },
  {
    code: "lamina",
  },
  {
    code: "Alambrebco18",
  },
  {
    code: "FPET.22",
  },
  {
    code: "2308-2012",
  },
  {
    code: "PUN.78",
  },
  {
    code: "GF06",
  },
  {
    code: "S3148",
  },
  {
    code: "S320",
  },
  {
    code: "Budin18",
  },
  {
    code: "REP4006",
  },
  {
    code: "budin20",
  },
  {
    code: "S397",
  },
  {
    code: "S643",
  },
  {
    code: "S351",
  },
  {
    code: "yicake02",
  },
  {
    code: "S124",
  },
  {
    code: "Disc1",
  },
  {
    code: "capi",
  },
  {
    code: "REP5043",
  },
  {
    code: "LT2510",
  },
  {
    code: "AM017",
  },
  {
    code: "AZ031",
  },
  {
    code: "piroemogi",
  },
  {
    code: "S3159",
  },
  {
    code: "S3157",
  },
  {
    code: "S3155",
  },
  {
    code: "S3158",
  },
  {
    code: "mbuffylim",
  },
  {
    code: "MBUFFYFRUT",
  },
  {
    code: "MBUFFYCHO",
  },
  {
    code: "picoglobo",
  },
  {
    code: "GF05",
  },
  {
    code: "REP4009",
  },
  {
    code: "capi10",
  },
  {
    code: "2592",
  },
  {
    code: "Sc34",
  },
  {
    code: "4160883",
  },
  {
    code: "4160881",
  },
  {
    code: "GA72",
  },
  {
    code: "MSC4",
  },
  {
    code: "23080900",
  },
  {
    code: "19041023",
  },
  {
    code: "REP5004",
  },
  {
    code: "REP5005",
  },
  {
    code: "REP5008",
  },
  {
    code: "YI2600",
  },
  {
    code: "REP5007",
  },
  {
    code: "19071089",
  },
  {
    code: "FPET.73",
  },
  {
    code: "FPET.76",
  },
  {
    code: "FPET.72",
  },
  {
    code: "FPET.86",
  },
  {
    code: "FPET.74",
  },
  {
    code: "FPET.69",
  },
  {
    code: "FLECOLPET.62",
  },
  {
    code: "FPET.60",
  },
  {
    code: "FPET.64",
  },
  {
    code: "FPET.59",
  },
  {
    code: "FLEESC 102",
  },
  {
    code: "FPET.52",
  },
  {
    code: "FPET.53",
  },
  {
    code: "FPET.50",
  },
  {
    code: "REPANT10",
  },
  {
    code: "126256",
  },
  {
    code: "stapuldur880",
  },
  {
    code: "stapulana880",
  },
  {
    code: "11275",
  },
  {
    code: "Pallentverx0.5",
  },
  {
    code: "Pallentrox0.5",
  },
  {
    code: "Pallentblx0.5",
  },
  {
    code: "Rocklenchox1",
  },
  {
    code: "Pallentrosx0.5",
  },
  {
    code: "Pallentazx0.5",
  },
  {
    code: "Pallentamax0.5",
  },
  {
    code: "Pallentnax0.5",
  },
  {
    code: "Pallentviox0.5",
  },
  {
    code: "Pallentmirox0.5",
  },
  {
    code: "PALLENTMIROSX0.",
  },
  {
    code: "Pallentmiazx0.5",
  },
  {
    code: "Pallentmiviox0.",
  },
  {
    code: "PALMINICHOOK1K",
  },
  {
    code: "PALLENTMIVERX0.",
  },
  {
    code: "Pallentminax0.5",
  },
  {
    code: "Pallentmiblx0.5",
  },
  {
    code: "PALLENTMIAMAX0.",
  },
  {
    code: "Pallentchookx1",
  },
  {
    code: "chauvai",
  },
  {
    code: "ARGCERCHOMUL105",
  },
  {
    code: "Proesevaix1l",
  },
  {
    code: "Cocobcox250",
  },
  {
    code: "Dewechipx1",
  },
  {
    code: "Carx0.75",
  },
  {
    code: "Carx1.5",
  },
  {
    code: "GA48",
  },
  {
    code: "GA28",
  },
  {
    code: "GA36",
  },
  {
    code: "GA15",
  },
  {
    code: "GA25",
  },
  {
    code: "GA2",
  },
  {
    code: "GA10",
  },
  {
    code: "FH03",
  },
  {
    code: "FH02",
  },
  {
    code: "FH01",
  },
  {
    code: "FA114",
  },
  {
    code: "FA106",
  },
  {
    code: "FA100",
  },
  {
    code: "FA151",
  },
  {
    code: "FA376",
  },
  {
    code: "FA381",
  },
  {
    code: "FA363",
  },
  {
    code: "FA360",
  },
  {
    code: "FA372",
  },
  {
    code: "FA357",
  },
  {
    code: "FA343",
  },
  {
    code: "FA328",
  },
  {
    code: "FA277",
  },
  {
    code: "FA235",
  },
  {
    code: "FA231",
  },
  {
    code: "FA210",
  },
  {
    code: "FA197",
  },
  {
    code: "FA055",
  },
  {
    code: "FA018",
  },
  {
    code: "S615",
  },
  {
    code: "S605",
  },
  {
    code: "S603",
  },
  {
    code: "S607",
  },
  {
    code: "S629",
  },
  {
    code: "S602",
  },
  {
    code: "S3143",
  },
  {
    code: "S3129",
  },
  {
    code: "S3121",
  },
  {
    code: "S3110",
  },
  {
    code: "S601",
  },
  {
    code: "S441",
  },
  {
    code: "S3111",
  },
  {
    code: "S366",
  },
  {
    code: "S382",
  },
  {
    code: "S372",
  },
  {
    code: "S3103",
  },
  {
    code: "S3102",
  },
  {
    code: "S361",
  },
  {
    code: "S386",
  },
  {
    code: "S228",
  },
  {
    code: "S123",
  },
  {
    code: "S207",
  },
  {
    code: "S224",
  },
  {
    code: "S122",
  },
  {
    code: "S230",
  },
  {
    code: "S341",
  },
  {
    code: "S336",
  },
  {
    code: "S240",
  },
  {
    code: "S231",
  },
  {
    code: "S118",
  },
  {
    code: "S108",
  },
  {
    code: "S111",
  },
  {
    code: "S112",
  },
  {
    code: "S113",
  },
  {
    code: "S121",
  },
  {
    code: "S114",
  },
  {
    code: "S102",
  },
  {
    code: "SGP8",
  },
  {
    code: "SGP14",
  },
  {
    code: "SGP23",
  },
  {
    code: "SGP30",
  },
  {
    code: "SGP60",
  },
  {
    code: "SGP10",
  },
  {
    code: "SGP13",
  },
  {
    code: "SGP21",
  },
  {
    code: "RW112",
  },
  {
    code: "SN12",
  },
  {
    code: "SN11",
  },
  {
    code: "SW88",
  },
  {
    code: "SW116",
  },
  {
    code: "SW103",
  },
  {
    code: "SN3",
  },
  {
    code: "SN14",
  },
  {
    code: "SN7",
  },
  {
    code: "SW77",
  },
  {
    code: "SET21",
  },
  {
    code: "SET28",
  },
  {
    code: "Setsten.33",
  },
  {
    code: "SW27",
  },
  {
    code: "Setsten.29",
  },
  {
    code: "Setsten.26",
  },
  {
    code: "SW20",
  },
  {
    code: "SW21",
  },
  {
    code: "Setsten.24",
  },
  {
    code: "SW71",
  },
  {
    code: "SET3",
  },
  {
    code: "YIPLAGIRALU",
  },
  {
    code: "Setsten.2",
  },
  {
    code: "Setsten.12",
  },
  {
    code: "sc309",
  },
  {
    code: "sc145",
  },
  {
    code: "sc152",
  },
  {
    code: "YI2568",
  },
  {
    code: "4160636",
  },
  {
    code: "91310",
  },
  {
    code: "P33.10",
  },
  {
    code: "P33.08",
  },
  {
    code: "P23.10",
  },
  {
    code: "P37.08.02",
  },
  {
    code: "P37.10.02",
  },
  {
    code: "P37.08.01",
  },
  {
    code: "P10.08.02",
  },
  {
    code: "P10.08.01",
  },
  {
    code: "P37.10.01",
  },
  {
    code: "P10.08.03",
  },
  {
    code: "P01.08",
  },
  {
    code: "P01.10",
  },
  {
    code: "P27.10",
  },
  {
    code: "P27.08",
  },
  {
    code: "P13.10",
  },
  {
    code: "P18.10",
  },
  {
    code: "P06.08",
  },
  {
    code: "P18.08",
  },
  {
    code: "P06.10",
  },
  {
    code: "P35.08",
  },
  {
    code: "P35.10",
  },
  {
    code: "P02.10.01",
  },
  {
    code: "P13.08",
  },
  {
    code: "P02.08.01",
  },
  {
    code: "P02.08.02",
  },
  {
    code: "P02.10.02",
  },
  {
    code: "P12.08.02",
  },
  {
    code: "P12.10.02",
  },
  {
    code: "P12.08.01",
  },
  {
    code: "P12.10.01",
  },
  {
    code: "PL0012.10",
  },
  {
    code: "FPET.11",
  },
  {
    code: "FPET.13",
  },
  {
    code: "FPET.12",
  },
  {
    code: "FPET.16",
  },
  {
    code: "FPET.14",
  },
  {
    code: "FPET.10",
  },
  {
    code: "FLIPO.05",
  },
  {
    code: "FPET.06",
  },
  {
    code: "FPET.05",
  },
  {
    code: "FPET.08",
  },
  {
    code: "FPET.04",
  },
  {
    code: "FPET.02",
  },
  {
    code: "FLIPO.03",
  },
  {
    code: "FLIPO.02",
  },
  {
    code: "FLIPO.01",
  },
  {
    code: "FLIPO.04",
  },
  {
    code: "FLEESC.42",
  },
  {
    code: "FLES37",
  },
  {
    code: "FLEESC.14",
  },
  {
    code: "FLEESC.15",
  },
  {
    code: "FLEESC.16",
  },
  {
    code: "FLEESC.31",
  },
  {
    code: "FLEESC.32",
  },
  {
    code: "FLES11",
  },
  {
    code: "FLEESC.10",
  },
  {
    code: "FLEESC.12",
  },
  {
    code: "FLEESC.06",
  },
  {
    code: "FLES07",
  },
  {
    code: "FFUL03",
  },
  {
    code: "FFUL06",
  },
  {
    code: "FFUL04",
  },
  {
    code: "FFUL02",
  },
  {
    code: "PUN.71",
  },
  {
    code: "FLEILU.02",
  },
  {
    code: "FLEILU.04",
  },
  {
    code: "FLEILU.01",
  },
  {
    code: "FLEILU.03",
  },
  {
    code: "FLEILU.05",
  },
  {
    code: "PUN.40",
  },
  {
    code: "PUN.02",
  },
  {
    code: "PG DECOR 05",
  },
  {
    code: "PG DECOR 07",
  },
  {
    code: "PG DECOR 06",
  },
  {
    code: "PG DECOR 08",
  },
  {
    code: "PG DECOR 16",
  },
  {
    code: "PG DECOR 15",
  },
  {
    code: "BR.80",
  },
  {
    code: "BR.95",
  },
  {
    code: "BR.96",
  },
  {
    code: "BR.78",
  },
  {
    code: "PA DECOR 01",
  },
  {
    code: "BR.70",
  },
  {
    code: "BR.73",
  },
  {
    code: "BR.74",
  },
  {
    code: "BR.71",
  },
  {
    code: "BR.76",
  },
  {
    code: "MR.10",
  },
  {
    code: "RAP",
  },
  {
    code: "MR.2",
  },
  {
    code: "MG2",
  },
  {
    code: "RMPF",
  },
  {
    code: "RCCI",
  },
  {
    code: "8009",
  },
  {
    code: "Cup17",
  },
  {
    code: "SIL32",
  },
  {
    code: "417173",
  },
  {
    code: "1907-1347",
  },
  {
    code: "PS21",
  },
  {
    code: "SIL30",
  },
  {
    code: "PS20",
  },
  {
    code: "Wil095",
  },
  {
    code: "PS22",
  },
  {
    code: "SIL31",
  },
  {
    code: "PS35",
  },
  {
    code: "21055495",
  },
  {
    code: "Wil083",
  },
  {
    code: "6016200",
  },
  {
    code: "2105-5745",
  },
  {
    code: "Wil079",
  },
  {
    code: "703212",
  },
  {
    code: "7105521",
  },
  {
    code: "710773",
  },
  {
    code: "7101133",
  },
  {
    code: "7101132",
  },
  {
    code: "402230",
  },
  {
    code: "710041",
  },
  {
    code: "7101130",
  },
  {
    code: "710044",
  },
  {
    code: "7101129",
  },
  {
    code: "4024400",
  },
  {
    code: "402-1005",
  },
  {
    code: "21050614",
  },
  {
    code: "4021002",
  },
  {
    code: "Wil019",
  },
  {
    code: "4021274",
  },
  {
    code: "4021007",
  },
  {
    code: "402366",
  },
  {
    code: "4097714",
  },
  {
    code: "4097716",
  },
  {
    code: "4097712",
  },
  {
    code: "4097715",
  },
  {
    code: "4097702",
  },
];

export const disableTnProducts = async () => {
  const disabledCodesSet = new Set(
    disabledCodes.map((code) => code.code.toUpperCase())
  );
  const tnProducts = await tnWholesaleStore.getAllProducts({
    includeGiftCards: true,
    includeVirtualProducts: true,
  });

  const productsToDisable = tnProducts.filter((product) => {
    const sku = product.variants[0].sku;
    if (!sku) return false;
    return disabledCodesSet.has(sku);
  });

  console.log(`Disabling ${productsToDisable.length} products`);

  await tnWholesaleStore.updateProducts(
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
