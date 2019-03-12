module Stage_S1SIO{
    export class mainStage_S1SIO implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
             let mythis : mainStage_S1SIO = this;
            mythis.page = new Page({id:"PageStage_S1SIO",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }

        // Methodes
// ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainStage_S1SIO =this;
            // bouton Retour
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                     window.history.back();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"Retour",
               title:"Retour"
           }));
        }

        // ----- //
        // Corps //
        // ----- //
        private GenerateContainte() {
            let mythis: mainStage_S1SIO = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "Stage - Premier Année - Cs3i"});

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Situation  :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "J’ai effectué mon stage de première année en développeur pour le site Emed de Cs3i a Creusiez le neuf. L’entreprise Cs3i est spécialisée dans les solutions d’aide médical, ils sont propriétaires du site « application » Emed. Emed est un site outil pour les hôpitaux et le secteur médical, et se veut être une application web."
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));

            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Cahier des charges :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Le site Emed existe depuis plusieurs années et à évoluer de langage au cours des années. Mais il reste encore des parties qu’ils souhaitent faire évoluer ou recrée avec leur Framework en Type Script pour créer la page. Ma mission a été de recréer la page des « Transmission » du site avec leur Framework qui ma éviter de faire du html. Les « Transmission » sert pour que les infirmières de journée et de nuit puisent communiquer des informations qui sont arrivés dans la journée sur les patients.",
                type: EnumTypeLabel.Standard
            }))

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            })).ajouter(new DivImage({
                    Image:"Maquette_01",
                    typeCadre:EnumTypeCadreImage.Standard
            })).ajouter(new DivImage({
                    Image:"Maquette_02",
                    typeCadre:EnumTypeCadreImage.Standard
            })).ajouter(new DivImage({
                    Image:"Maquette_03",
                    typeCadre:EnumTypeCadreImage.Standard
            })).ajouter(new Label({
                type : EnumTypeLabel.Standard,
                text : "Exemple de Web Service (C#):"
            })).ajouter(new HighLight_Code({
                Langage:EnumLangageHighLightCode.Csharp,
                style: EnumStyleHighLightCode.visualStudio2015dark,
                text:"        // Récupère les transmissions d'un dossier\n" +
                    "        [xxxService(EDroit.so_affichage_transmissions)]\n" +
                    "        public List<CustomTransmission> GetListTransmissionByCleDossier(long cleDossier)\n" +
                    "        {\n" +
                    "            bool test = SessionManager.Get().droits.HasDroit(EDroit.so_affichage_transmissions);\n" +
                    "            List<CustomTransmission> list = new List<CustomTransmission>();\n" +
                    "\n" +
                    "            List<CV5Transmission> listTrans = CV5TransmissionQuery.GetAllTransmissionsByDossier(cleDossier);\n" +
                    "            string numAdmin = CV5DossierQuery.GetNumAdministratifParCleDossier(cleDossier, null);\n" +
                    "            bool isClos = CV5DossierQuery.IsClos(cleDossier, null);\n" +
                    "            List<CV5CibleTransmission> cibles = CV5TransmissionQuery.GetAllCiblesTransmissions();\n" +
                    "            \n" +
                    "            foreach (CV5Transmission trans in listTrans)\n" +
                    "            {\n" +
                    "                CV5CibleTransmission cible = cibles.FirstOrDefault(c => trans.IdCible == c.Id);\n" +
                    "                list.Add(new CustomTransmission(trans, numAdmin, isClos, cible));\n" +
                    "            }\n" +
                    "\n" +
                    "\n" +
                    "            return GetTransmissionTriees(list);\n" +
                    "        }"
            })).ajouter(new Label({
                type: EnumTypeLabel.Standard,
                text: "Partie de code TypeScript :"
            })).ajouter(new HighLight_Code({
                Langage:EnumLangageHighLightCode.TypeScript,
                style:EnumStyleHighLightCode.visualStudio2015dark,
                text:"module Transmission\n" +
                    "{\n" +
                    "    // Extention de la class contenent les informations d'une transmission et generation des elements d'affichages de la transmission\n" +
                    "    export class CustomTransmissionExtend extends CustomTransmission implements iXElement\n" +
                    "    {\n" +
                    "        private Block: BlockTransmission;\n" +
                    "        public main: xxxTransmissionMain\n" +
                    "\n" +
                    "        constructor(inter: CustomTransmission,Main: xxxTransmissionMain)\n" +
                    "        {\n" +
                    "            super(inter);\n" +
                    "            this.main = Main;\n" +
                    "            this.Block = new BlockTransmission(this);\n" +
                    "        }\n" +
                    "\n" +
                    "        public MajTransmission(trans: CustomTransmission)\n" +
                    "        {\n" +
                    "            assignerObjet(this, trans);\n" +
                    "            this.Block.Generate();\n" +
                    "            this.main.Historique.ActualiserDonnee(null);\n" +
                    "        }\n" +
                    "\n" +
                    "        get x(): xQuery\n" +
                    "        {\n" +
                    "            return this.Block.x;\n" +
                    "        }\n" +
                    "    }\n" +
                    "\n" +
                    "\n" +
                    "    // Block d'une transmission repliable\n" +
                    "    class BlockTransmission implements iXElement\n" +
                    "    {\n" +
                    "        // Attributs //\n" +
                    "        private Block: xxZoneRepliable;\n" +
                    "        private div:xDiv;\n" +
                    "        private titre: xDiv;\n" +
                    "        private detail: xDiv;\n" +
                    "\n" +
                    "        private ZoneDonnee: BlockZoneDonnee;\n" +
                    "        private ZoneAction: BlockZoneDonnee;\n" +
                    "        private ZoneResultat: BlockZoneDonnee;\n" +
                    "\n" +
                    "        private Trans: CustomTransmissionExtend;\n" +
                    "\n" +
                    "        // Constructeur //\n" +
                    "        constructor(Trans: CustomTransmissionExtend)\n" +
                    "        {\n" +
                    "            let mythis: BlockTransmission = this;\n" +
                    "            mythis.Trans = Trans;\n" +
                    "            mythis.titre = new xDiv({});\n" +
                    "            mythis.detail = new xDiv({});\n" +
                    "            mythis.div = new xDiv({ class: \"BlockTransmission\"});\n" +
                    "\n" +
                    "            mythis.Generate();\n" +
                    "        }\n" +
                    "\n" +
                    "        // Methode //\n" +
                    "\n" +
                    "        public Generate() {\n" +
                    "            this.ZoneRepliable();\n" +
                    "            this.header();\n" +
                    "            this.Contenue(); \n" +
                    "        }\n" +
                    "\n" +
                    "        private ZoneRepliable() {\n" +
                    "            let mythis: BlockTransmission = this;\n" +
                    "            mythis.div.x.empty()\n" +
                    "            let Addclass: string = (mythis.Trans.Validation == null) ? \"\" : \"Cloturer\";\n" +
                    "\n" +
                    "            mythis.Block = new xxZoneRepliable({\n" +
                    "                renderTitre: function (leTitre) { leTitre.append(mythis.titre); },\n" +
                    "                renderDetail: function (leDetail) { leDetail.append(mythis.detail); },\n" +
                    "                class: Addclass\n" +
                    "            });\n" +
                    "            mythis.div.asHolder.append(mythis.Block);\n" +
                    "        }\n" +
                    "\n" +
                    "        private header() {\n" +
                    "            let Header: HeaderBlockTransmission = new HeaderBlockTransmission(this.Trans);\n" +
                    "            this.titre.asHolder.empty();\n" +
                    "            this.titre.asHolder.append(Header);\n" +
                    "        }\n" +
                    "\n" +
                    "        private Contenue() {\n" +
                    "            this.detail.x.empty();\n" +
                    "            this.ZoneDonnee= new BlockZoneDonnee(CustomEnumType.Donnees, this.Trans);\n" +
                    "            this.ZoneAction= new BlockZoneDonnee(CustomEnumType.Actions, this.Trans);\n" +
                    "            this.ZoneResultat= new BlockZoneDonnee(CustomEnumType.Resultats, this.Trans);\n" +
                    "            this.detail.asHolder.append(this.ZoneDonnee);\n" +
                    "            this.detail.asHolder.append(this.ZoneAction);\n" +
                    "            this.detail.asHolder.append(this.ZoneResultat);\n" +
                    "        }\n" +
                    "\n" +
                    "        get x(): xQuery\n" +
                    "        {\n" +
                    "            return this.div.x;\n" +
                    "        }\n" +
                    "\n" +
                    "    }\n" +
                    "\t[…]\n" +
                    "}"
            }));

            mythis.page.AjouteContainte(divcontenu);
        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}