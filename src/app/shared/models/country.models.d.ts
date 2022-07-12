import * as i0 from "@angular/core";
export interface Country {
    name: string;
    iso2: string;
    dialCode: string;
    areaCodes?: string[];
    flag: string;
}
export declare enum CountryISO {
    Afghanistan = "AF",
    Albania = "AL",
    Algeria = "DZ",
    AmericanSamoa = "AS",
    Andorra = "AD",
    Angola = "AO",
    Anguilla = "AI",
    AntiguaAndBarbuda = "AG",
    Argentina = "AR",
    Armenia = "AM",
    Aruba = "AW",
    Australia = "AU",
    Austria = "AT",
    Azerbaijan = "AZ",
    Bahamas = "BS",
    Bahrain = "BH",
    Bangladesh = "BD",
    Barbados = "BB",
    Belarus = "BY",
    Belgium = "BE",
    Belize = "BZ",
    Benin = "BJ",
    Bermuda = "BM",
    Bhutan = "BT",
    Bolivia = "BO",
    BosniaAndHerzegovina = "BA",
    Botswana = "BW",
    Brazil = "BR",
    BritishIndianOceanTerritory = "IO",
    BritishVirginIslands = "VG",
    Brunei = "BN",
    Bulgaria = "BG",
    BurkinaFaso = "BF",
    Burundi = "BI",
    Cambodia = "KH",
    Cameroon = "CM",
    Canada = "CA",
    CapeVerde = "CV",
    CaribbeanNetherlands = "BQ",
    CaymanIslands = "KY",
    CentralAfricanRepublic = "CF",
    Chad = "TD",
    Chile = "CL",
    China = "CN",
    ChristmasIsland = "CX",
    Cocos = "CC",
    Colombia = "CC",
    Comoros = "KM",
    CongoDRCJamhuriYaKidemokrasiaYaKongo = "CD",
    CongoRepublicCongoBrazzaville = "CG",
    CookIslands = "CK",
    CostaRica = "CR",
    CôteDIvoire = "CI",
    Croatia = "HR",
    Cuba = "CU",
    Curaçao = "CW",
    Cyprus = "CY",
    CzechRepublic = "CZ",
    Denmark = "DK",
    Djibouti = "DJ",
    Dominica = "DM",
    DominicanRepublic = "DO",
    Ecuador = "EC",
    Egypt = "EG",
    ElSalvador = "SV",
    EquatorialGuinea = "GQ",
    Eritrea = "ER",
    Estonia = "EE",
    Ethiopia = "ET",
    FalklandIslands = "FK",
    FaroeIslands = "FO",
    Fiji = "FJ",
    Finland = "FI",
    France = "FR",
    FrenchGuiana = "GF",
    FrenchPolynesia = "PF",
    Gabon = "GA",
    Gambia = "GM",
    Georgia = "GE",
    Germany = "DE",
    Ghana = "GH",
    Gibraltar = "GI",
    Greece = "GR",
    Greenland = "GL",
    Grenada = "GD",
    Guadeloupe = "GP",
    Guam = "GU",
    Guatemala = "GT",
    Guernsey = "GG",
    Guinea = "GN",
    GuineaBissau = "GW",
    Guyana = "GY",
    Haiti = "HT",
    Honduras = "HN",
    HongKong = "HK",
    Hungary = "HU",
    Iceland = "IS",
    India = "IN",
    Indonesia = "ID",
    Iran = "IR",
    Iraq = "IQ",
    Ireland = "IE",
    IsleOfMan = "IM",
    Israel = "IL",
    Italy = "IT",
    Jamaica = "JM",
    Japan = "JP",
    Jersey = "JE",
    Jordan = "JO",
    Kazakhstan = "KZ",
    Kenya = "KE",
    Kiribati = "KI",
    Kosovo = "XK",
    Kuwait = "KW",
    Kyrgyzstan = "KG",
    Laos = "LA",
    Latvia = "LV",
    Lebanon = "LB",
    Lesotho = "LS",
    Liberia = "LR",
    Libya = "LY",
    Liechtenstein = "LI",
    Lithuania = "LT",
    Luxembourg = "LU",
    Macau = "MO",
    Macedonia = "MK",
    Madagascar = "MG",
    Malawi = "MW",
    Malaysia = "MY",
    Maldives = "MV",
    Mali = "ML",
    Malta = "MT",
    MarshallIslands = "MH",
    Martinique = "MQ",
    Mauritania = "MR",
    Mauritius = "MU",
    Mayotte = "YT",
    Mexico = "MX",
    Micronesia = "FM",
    Moldova = "MD",
    Monaco = "MC",
    Mongolia = "MN",
    Montenegro = "ME",
    Montserrat = "MS",
    Morocco = "MA",
    Mozambique = "MZ",
    Myanmar = "MM",
    Namibia = "NA",
    Nauru = "NR",
    Nepal = "NP",
    Netherlands = "NL",
    NewCaledonia = "NC",
    NewZealand = "NZ",
    Nicaragua = "NI",
    Niger = "NE",
    Nigeria = "NG",
    Niue = "NU",
    NorfolkIsland = "NF",
    NorthKorea = "KP",
    NorthernMarianaIslands = "MP",
    Norway = "NO",
    Oman = "OM",
    Pakistan = "PK",
    Palau = "PW",
    Palestine = "PS",
    Panama = "PA",
    PapuaNewGuinea = "PG",
    Paraguay = "PY",
    Peru = "PE",
    Philippines = "PH",
    Poland = "PL",
    Portugal = "PT",
    PuertoRico = "PR",
    Qatar = "QA",
    Réunion = "RE",
    Romania = "RO",
    Russia = "RU",
    Rwanda = "RW",
    SaintBarthélemy = "BL",
    SaintHelena = "SH",
    SaintKittsAndNevis = "KN",
    SaintLucia = "LC",
    SaintMartin = "MF",
    SaintPierreAndMiquelon = "PM",
    SaintVincentAndTheGrenadines = "VC",
    Samoa = "WS",
    SanMarino = "SM",
    SãoToméAndPríncipe = "ST",
    SaudiArabia = "SA",
    Senegal = "SN",
    Serbia = "RS",
    Seychelles = "SC",
    SierraLeone = "SL",
    Singapore = "SG",
    SintMaarten = "SX",
    Slovakia = "SK",
    Slovenia = "SI",
    SolomonIslands = "SB",
    Somalia = "SO",
    SouthAfrica = "ZA",
    SouthKorea = "KR",
    SouthSudan = "SS",
    Spain = "ES",
    SriLanka = "LK",
    Sudan = "SD",
    Suriname = "SR",
    SvalbardAndJanMayen = "SJ",
    Swaziland = "SZ",
    Sweden = "SE",
    Switzerland = "CH",
    Syria = "SY",
    Taiwan = "TW",
    Tajikistan = "TJ",
    Tanzania = "TZ",
    Thailand = "TH",
    TimorLeste = "TL",
    Togo = "TG",
    Tokelau = "TK",
    Tonga = "TO",
    TrinidadAndTobago = "TT",
    Tunisia = "TN",
    Turkey = "TR",
    Turkmenistan = "TM",
    TurksAndCaicosIslands = "TC",
    Tuvalu = "TV",
    USVirginIslands = "VI",
    Uganda = "UG",
    Ukraine = "UA",
    UnitedArabEmirates = "AE",
    UnitedKingdom = "GB",
    UnitedStates = "US",
    Uruguay = "UY",
    Uzbekistan = "UZ",
    Vanuatu = "VU",
    VaticanCity = "VA",
    Venezuela = "VE",
    Vietnam = "VN",
    WallisAndFutuna = "WF",
    WesternSahara = "EH",
    Yemen = "YE",
    Zambia = "ZM",
    Zimbabwe = "ZW",
    ÅlandIslands = "AX"
}
export declare class CountryData {
    allCountries: Array<Country>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryData, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryData>;
}
