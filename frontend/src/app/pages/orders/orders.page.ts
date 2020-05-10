import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"]
})
export class OrdersPage implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;

  displayedRows: ShipData[];
  constructor() {}

  ngOnInit() {
    this.displayedRows = exampleShips;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];

export interface ShipData {
  vesselId: string;
  vesselName: string;
  ircs?: string;
  countryCode: string;
  vesselStatus: string;
  grossTonnage?: number;
  hullNumber?: string;
  vesselType: string;
  jonesActEligible: boolean;
  disabledDate?: string;
}

export const exampleShips: ShipData[] = [
  {
    ircs: "V7QV6",
    vesselName: "KYOWA ORCHID",
    countryCode: "US",
    vesselId: "IMO8675368",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WECH",
    vesselName: "MANULANI",
    countryCode: "US",
    vesselId: "IMO8675370",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WDB5483",
    vesselName: "FREEDOM",
    countryCode: "US",
    vesselId: "IMO8675382",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "C6VT5",
    vesselName: "CORAL",
    countryCode: "BF",
    vesselId: "IMO8675394",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "CQOD",
    vesselName: "AUTORACER",
    countryCode: "PO",
    vesselId: "IMO8675409",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "OJIL",
    vesselName: "ESTRADEN",
    countryCode: "FI",
    vesselId: "IMO8675411",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "ELXJ7",
    vesselName: "VIKING CHANCE",
    countryCode: "LI",
    vesselId: "IMO8675423",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WDC6923",
    vesselName: "HONOR",
    countryCode: "US",
    vesselId: "IMO8675435",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WGAX",
    vesselName: "INDEPENDENCE II",
    countryCode: "US",
    vesselId: "IMO8675447",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WDE9586",
    vesselName: "ENDURANCE",
    countryCode: "US",
    vesselId: "IMO8675459",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WDC6925",
    vesselName: "INTEGRITY",
    countryCode: "US",
    vesselId: "IMO8675461",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WX6809",
    vesselName: "LADY LUCK",
    countryCode: "US",
    vesselId: "IMO8675473",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WX6800",
    vesselName: "LADY LIBERTY",
    countryCode: "US",
    vesselId: "IMO8675485",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WX6811",
    vesselName: "LUCKY LADY",
    countryCode: "NO",
    vesselId: "IMO8675497",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LADH4",
    vesselName: "HUAL FAVORITA",
    countryCode: "NO",
    vesselId: "IMO8675502",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WQVY",
    vesselName: "PATRIOT",
    countryCode: "US",
    vesselId: "IMO8675514",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LADG4",
    vesselName: "HUAL MARGARITA",
    countryCode: "NO",
    vesselId: "IMO8675526",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KXEP",
    vesselName: "COMET",
    countryCode: "US",
    vesselId: "IMO8675538",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KXEK",
    vesselName: "METEOR",
    countryCode: "US",
    vesselId: "IMO8675540",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3FPW3",
    vesselName: "BUJIN",
    countryCode: "PM",
    vesselId: "IMO8675552",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3FWI3",
    vesselName: "KAIJIN",
    countryCode: "PM",
    vesselId: "IMO8675564",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LAEM4",
    vesselName: "DYVI KATTEGAT",
    countryCode: "NO",
    vesselId: "IMO8675576",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LAEV2",
    vesselName: "ARMACUP PATRICIA",
    countryCode: "NO",
    vesselId: "IMO8675588",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KAXO",
    vesselName: "CAPT STEVEN L BENNETT",
    countryCode: "US",
    vesselId: "IMO8675590",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EVF8",
    vesselName: "MORNING AUTO",
    countryCode: "PM",
    vesselId: "IMO8675605",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EHQ8",
    vesselName: "MORNING IVY",
    countryCode: "PM",
    vesselId: "IMO8675617",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "DGOO",
    vesselName: "APL MELBOURNE",
    countryCode: "GM",
    vesselId: "IMO8675629",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "ELMR7",
    vesselName: "MORNING SAGA",
    countryCode: "LI",
    vesselId: "IMO8675631",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3ERT8",
    vesselName: "MORNING POWER",
    countryCode: "PM",
    vesselId: "IMO8675643",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LAFH4",
    vesselName: "HUAL TRAPEZE",
    countryCode: "NO",
    vesselId: "IMO8675655",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "S6FW",
    vesselName: "ARABIAN BREEZE",
    countryCode: "SN",
    vesselId: "IMO8675667",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EMF2",
    vesselName: "MV MORNING DEW",
    countryCode: "PM",
    vesselId: "IMO8675679",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EPI7",
    vesselName: "MORNING SUN",
    countryCode: "PM",
    vesselId: "IMO8675681",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EYD5",
    vesselName: "MORNING BREEZE",
    countryCode: "PM",
    vesselId: "IMO8675693",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3FIJ",
    vesselName: "NIKOLAS",
    countryCode: "PM",
    vesselId: "IMO8675708",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EUI8",
    vesselName: "MORNING CHARM",
    countryCode: "PM",
    vesselId: "IMO8675710",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3FYW2",
    vesselName: "MORNING QUEEN",
    countryCode: "PM",
    vesselId: "IMO8675722",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3EZO4",
    vesselName: "MORNING PRINCE",
    countryCode: "PM",
    vesselId: "IMO8675734",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LAUX2",
    vesselName: "HOEGH TRUBADOUR",
    countryCode: "NO",
    vesselId: "IMO8675746",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "LAXK2",
    vesselName: "HOEGH TROPICANA",
    countryCode: "NO",
    vesselId: "IMO8675758",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "ELDU4",
    vesselName: "TRIGGER",
    countryCode: "LI",
    vesselId: "IMO8675760",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "9VEQ",
    vesselName: "BALTIC BREEZE",
    countryCode: "SN",
    vesselId: "IMO8675772",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "3ELG9",
    vesselName: "EUROPEAN EMERALD",
    countryCode: "PM",
    vesselId: "IMO8675784",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "ELKI8",
    vesselName: "OCEAN SPIRIT",
    countryCode: "LI",
    vesselId: "IMO8675796",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WYM2056",
    vesselName: "MISS SAIDY",
    countryCode: "US",
    vesselId: "IMO8675801",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "SXQA",
    vesselName: "MSC YOKOHAMA",
    countryCode: "GR",
    vesselId: "IMO8675813",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WVDG",
    vesselName: "NEW YORK",
    countryCode: "US",
    vesselId: "IMO8675825",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WBWK",
    vesselName: "MOKU PAHU/HSTC-1",
    countryCode: "US",
    vesselId: "IMO8675837",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WXKM",
    vesselName: "BALTIMORE",
    countryCode: "US",
    vesselId: "IMO8675849",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KSYP",
    vesselName: "PHILADELPHIA",
    countryCode: "US",
    vesselId: "IMO8675851",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KXDB",
    vesselName: "MOBILE",
    countryCode: "US",
    vesselId: "IMO8675863",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KRGC",
    vesselName: "SMT CHEMICAL EXPLORER",
    countryCode: "US",
    vesselId: "IMO8675875",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WNDG",
    vesselName: "JACKSONVILLE",
    countryCode: "US",
    vesselId: "IMO8675887",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "KGPG",
    vesselName: "SEABULK MAGNACHEM",
    countryCode: "US",
    vesselId: "IMO8675899",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WBO2511",
    vesselName: "GUARDIAN",
    countryCode: "US",
    vesselId: "IMO8675904",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WZU7799",
    vesselName: "HUNTER D",
    countryCode: "US",
    vesselId: "IMO8675916",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WY2162",
    vesselName: "MICHAELA MCALLISTER",
    countryCode: "US",
    vesselId: "IMO8675928",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WX8505",
    vesselName: "CAPE HATTERAS",
    countryCode: "US",
    vesselId: "IMO8675930",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WZS4186",
    vesselName: "SAMSON MARINER",
    countryCode: "US",
    vesselId: "IMO8675942",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WX6371",
    vesselName: "SEA RACER",
    countryCode: "US",
    vesselId: "IMO8675954",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WX5891",
    vesselName: "EL MORRO",
    countryCode: "US",
    vesselId: "IMO8675966",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WK5255",
    vesselName: "PATRICE MCALLISTER",
    countryCode: "US",
    vesselId: "IMO8675978",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WAX7602",
    vesselName: "WESTERN NAVIGATOR",
    countryCode: "US",
    vesselId: "IMO8675980",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  },
  {
    ircs: "WAS5433",
    vesselName: "GENE DUNLAP",
    countryCode: "US",
    vesselId: "IMO8675992",
    vesselStatus: "S",
    grossTonnage: 1,
    hullNumber: undefined,
    vesselType: "A21",
    jonesActEligible: false,
    disabledDate: undefined
  }
];
