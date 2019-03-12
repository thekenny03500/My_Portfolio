module Stage_S2SIO{
    export class mainStage_S2SIO implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
             let mythis : mainStage_S2SIO = this;
            mythis.page = new Page({id:"PageStage_S2SIO",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }

        // Methodes
// ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainStage_S2SIO =this;
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
            let mythis: mainStage_S2SIO = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "Stage - Deuxième Année - Cs3i"});

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Situation  :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "J’ai effectué mon stage de Deuxième année en développeur pour le site Emed de Nexus/Cs3i a Bellerive sur Allier. L’entreprise Nexus/Cs3i est spécialisée dans les solutions d’aide médical, ils sont propriétaires du site « application » Emed. Emed est un site outil pour les hôpitaux et le secteur médical, et se veut être une application web."
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));

            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Cahier des charges :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "Le site Emed existe depuis plusieurs années et à évoluer de langage au cours des années. Mais il reste encore des parties qu’ils souhaitent faire évoluer ou recrée avec leur Framework en TypeScript. Ma mission a été de Migrer l’administration des agendas actuellement en Silverlight du site vers un module Typescript avec leur Framework. L'administration des agendas permet de créer/modifier des types ressources,types de rendez-vous, ressources, rendez-vous et les vue des agandas.",
                    type: EnumTypeLabel.Standard
                }))

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "menu des outils d'administration des agendas dans le module « Outil d’administration »",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "Menu_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }))
                .ajouter(new Label({
                    text: "Exemple de l'outil de gestion des types de ressource",
                    type: EnumTypeLabel.Standard,
                    Decoration: EnumDecoLabel.Souligner
                })).ajouter(new Warppanel({
                init: [
                    new Stackpanel({
                        init: [
                            new Label({
                                text: "Silverlight : ",
                                type: EnumTypeLabel.Standard
                            }),
                            new DivImage({
                                Image: "typeR_old",
                                typeCadre: EnumTypeCadreImage.Standard
                            })
                        ]
                    }),
                    new Stackpanel({
                        init: [
                            new Label({
                                text: "TypeScript : ",
                                type: EnumTypeLabel.Standard
                            }),
                            new DivImage({
                                Image: "typeR_new",
                                typeCadre: EnumTypeCadreImage.Standard
                            })
                        ]
                    })
                ]
            }))
                .ajouter(new Label({
                    text: "Exemple de la creation/modifiction des types de ressource",
                    type: EnumTypeLabel.Standard,
                    Decoration: EnumDecoLabel.Souligner
                })).ajouter(new Warppanel({
                init: [
                    new Stackpanel({
                        init: [
                            new Label({
                                text: "Silverlight : ",
                                type: EnumTypeLabel.Standard
                            }),
                            new DivImage({
                                Image: "typeR_Creat_old",
                                typeCadre: EnumTypeCadreImage.Standard
                            })
                        ]
                    }),
                    new Stackpanel({
                        init: [
                            new Label({
                                text: "TypeScript : ",
                                type: EnumTypeLabel.Standard
                            }),
                            new DivImage({
                                Image: "typeR_Creat_new",
                                typeCadre: EnumTypeCadreImage.Standard
                            })
                        ]
                    })
                ]
            })).ajouter(new Label({
                type: EnumTypeLabel.Standard,
                text: "Exemple de TypeScript"
            })).ajouter(new HighLight_Code({
                style:EnumStyleHighLightCode.visualStudio2015dark,
                Langage:EnumLangageHighLightCode.TypeScript,
                text:"module OutilsAdministration\n" +
                    "{\n" +
                    "export class GestionTypeRessource extends BaseGestionAgenda\n" +
                    "    {\n" +
                    "        // --------- //\n" +
                    "        // Attributs //\n" +
                    "        // --------- //\n" +
                    "        private dataContext: ObservableCollection<CustomTypeRessource>;\n" +
                    "        private Tableau: xxTableauWrapper<CustomTypeRessource>;\n" +
                    "\n" +
                    "        // ------------ //\n" +
                    "        // Constructeur //\n" +
                    "        // ------------ //\n" +
                    "        constructor(ici: iXElementHolder, recall: xxBoutonWrapper, Boxer: xxBoxer)\n" +
                    "        {\n" +
                    "            super(ici, recall, \"Gestion des types de ressource\", Boxer);\n" +
                    "            let mythis: GestionTypeRessource = this;\n" +
                    "\n" +
                    "            // Bouton d'ajout\n" +
                    "            mythis.maPage.zoneTitle.append(new xxBoutonWrapper({\n" +
                    "                textLocalise: \"Ajouter\",\n" +
                    "                titleLocalise: \"Ajouter un nouveau type de ressource\",\n" +
                    "                icone: new IconeCs3i(enumIconeCs3i.action_ajouter),\n" +
                    "                typeHabillageBouton: enumTypeHabillageBouton.header,\n" +
                    "                click: (e) =>\n" +
                    "                {\n" +
                    "                    mythis.GenerationBoxerCreationModification();\n" +
                    "                    e();\n" +
                    "                }\n" +
                    "            }));\n" +
                    "\n" +
                    "            mythis.GenerationTableau();\n" +
                    "        }\n" +
                    "\n" +
                    "        // -------- //\n" +
                    "        // Methodes //\n" +
                    "        // -------- //\n" +
                    "\n" +
                    "        // ------------------------------------------------ //\n" +
                    "        //  Generation du xxTableau des types de ressource  //\n" +
                    "        // ------------------------------------------------ //\n" +
                    "        private GenerationTableau():void\n" +
                    "        {\n" +
                    "            let mythis: GestionTypeRessource = this;\n" +
                    "\n" +
                    "            mythis.Tableau = new xxTableauWrapper<CustomTypeRessource>({\n" +
                    "                data: [],\n" +
                    "                exportPDF: true,\n" +
                    "                PdfModePaysage: true,\n" +
                    "                nomExportPdf:\"Gestion_Type_Ressource.pdf\",\n" +
                    "                columns: [\n" +
                    "                    {\n" +
                    "                        titleLocalise: \"Libellé\",\n" +
                    "                        renderMethod: function (ici, item)\n" +
                    "                        {\n" +
                    "                            ici.xxLabel({ textVariable: item.libelle });\n" +
                    "                        },\n" +
                    "                        print: function (item) { return item.libelle; }\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        titleLocalise: \"Matériel\",\n" +
                    "                        renderMethod: function (ici, item, element)\n" +
                    "                        {\n" +
                    "                            ici.xxCheckBox({\n" +
                    "                                value: item.isMaterial,\n" +
                    "                                inactif: true,\n" +
                    "                                ValueChange: (val) =>{}\n" +
                    "                            });\n" +
                    "                        },\n" +
                    "                        print: function (item) { return (item.isMaterial?\"Oui\":\"Non\"); }\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        titleLocalise: \"Medecin\",\n" +
                    "                        renderMethod: function (ici, item, element)\n" +
                    "                        {\n" +
                    "                            ici.xxCheckBox({\n" +
                    "                                value: item.isMedecin,\n" +
                    "                                inactif: true,\n" +
                    "                                ValueChange: (val) =>{}\n" +
                    "                            });\n" +
                    "                        },\n" +
                    "                        print: function (item) { return (item.isMedecin ? \"Oui\" : \"Non\"); }\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        titleLocalise: \"Modifier\",\n" +
                    "                        renderMethod: function (ici, item, element)\n" +
                    "                        {\n" +
                    "                            ici.xxBouton({\n" +
                    "                                textLocalise: \"Modifier\",\n" +
                    "                                titleLocalise: \"Modifier le type de ressource\",\n" +
                    "                                typeHabillageBouton: enumTypeHabillageBouton.miniSansTexte,\n" +
                    "                                icone: new IconeMiniCs3i(enumIconeMiniCs3i.modifier),\n" +
                    "                                click: (e) =>\n" +
                    "                                {\n" +
                    "                                    mythis.GenerationBoxerCreationModification(item);\n" +
                    "                                    e();\n" +
                    "                                }\n" +
                    "                            });\n" +
                    "                        }\n" +
                    "                    },\n" +
                    "                    {\n" +
                    "                        titleLocalise: \"Supprimer\",\n" +
                    "                        renderMethod: function (ici, item)\n" +
                    "                        {\n" +
                    "                            ici.xxBouton({\n" +
                    "                                textLocalise: \"Supprimer\",\n" +
                    "                                titleLocalise: \"Supprimer le type de ressource\",\n" +
                    "                                typeHabillageBouton: enumTypeHabillageBouton.miniSansTexte,\n" +
                    "                                icone: new IconeMiniCs3i(enumIconeMiniCs3i.supprimer),\n" +
                    "                                comportement: enumTypeBouton.actionAConfirmer,\n" +
                    "                                click: (e) =>\n" +
                    "                                {\n" +
                    "                                    mythis.DelTypeRessource(item);\n" +
                    "                                    e();\n" +
                    "                                }\n" +
                    "                            });\n" +
                    "                        }\n" +
                    "                    }\n" +
                    "\n" +
                    "                ]\n" +
                    "            });\n" +
                    "\n" +
                    "            // recuperation de l'ObservableCollection\n" +
                    "            mythis.dataContext = mythis.Tableau.dataContext;\n" +
                    "\n" +
                    "            // recuperation des données\n" +
                    "            mythis.GetTypesRessource();\n" +
                    "\n" +
                    "            // Ajout du tableau a l'affichage\n" +
                    "            mythis.maPage.zonePrincipale.append(mythis.Tableau);\n" +
                    "        }\n" +
                    "\t}\n" +
                    "[…]\n" +
                    "}"
            })).ajouter(new Label({
                type: EnumTypeLabel.Standard,
                text: "Exemple de C#"
            })).ajouter(new Label({
                type: EnumTypeLabel.Standard,
                text: "Service web :"
            })).ajouter(new HighLight_Code({
                style:EnumStyleHighLightCode.visualStudio2015dark,
                Langage:EnumLangageHighLightCode.TypeScript,
                text:"    // WebService\n" +
                    "    #region GestionTypeRessource\n" +
                    "        // Recupere une liste de CV5CTypeRessource et les transforme en liste de CustomTypeRessource \n" +
                    "        [xxxService]\n" +
                    "        public List<CustomTypeRessource> GetTypesRessource()\n" +
                    "        {\n" +
                    "            return CV5TypeRessourceQuery.GetAllTypeRessource().Select(c => new CustomTypeRessource(c)).ToList();\n" +
                    "        }\n" +
                    "        // Ajoute un type de ressource a partir d'un customTypeRessource\n" +
                    "        [xxxService]\n" +
                    "        public CustomTypeRessource AddTypesRessource(CustomTypeRessource unTypeRessource)\n" +
                    "        {\n" +
                    "            CV5CTypeRessource TypeRessourceAdd = CV5TypeRessourceAction.Add(unTypeRessource.Conversion());\n" +
                    "            return new CustomTypeRessource(TypeRessourceAdd);\n" +
                    "        }\n" +
                    "        // Modifier un type de ressource a partir d'un customTypeRessource\n" +
                    "        [xxxService]\n" +
                    "        public CustomTypeRessource SetTypesRessource(CustomTypeRessource unTypeRessource)\n" +
                    "        {\n" +
                    "            CV5CTypeRessource TypeRessourceSet = CV5TypeRessourceAction.Update(unTypeRessource.Conversion());\n" +
                    "            return new CustomTypeRessource(TypeRessourceSet);\n" +
                    "        }\n" +
                    "        // supprimer un type de ressource a partir d'un customTypeRessource\n" +
                    "        [xxxService]\n" +
                    "        public string DelTypesRessource(CustomTypeRessource unTypeRessource)\n" +
                    "        {\n" +
                    "            return CV5TypeRessourceAction.Delete(unTypeRessource.Conversion());\n" +
                    "        }\n" +
                    "    #endregion"
            })).ajouter(new Label({
                type: EnumTypeLabel.Standard,
                text: "Methodes LinQ To SQL :"
            })).ajouter(new HighLight_Code({
                style:EnumStyleHighLightCode.visualStudio2015dark,
                Langage:EnumLangageHighLightCode.TypeScript,
                text:"        /// <summary>\n" +
                    "        /// Permet de mettre à jour le type de ressource spécifié.\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"typeRess\"></param>\n" +
                    "        /// <returns></returns>\n" +
                    "        public static CV5CTypeRessource Update(CV5CTypeRessource typeRess)\n" +
                    "        {\n" +
                    "            DataV5DataContext dbContext = DataV5DataContext.CreateDataContext();\n" +
                    "            AG_TYPE_RESOURCE obj = dbContext.AG_TYPE_RESOURCE.FirstOrDefault(f => f.TR_ID == typeRess.Id);\n" +
                    "            UpdateEntity(obj, typeRess);\n" +
                    "            dbContext.SubmitChanges();\n" +
                    "\n" +
                    "            return CV5TypeRessourceQuery.GetInstance(obj);\n" +
                    "        }"
            }));

            mythis.page.AjouteContainte(divcontenu);
        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}