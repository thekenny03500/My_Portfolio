module PPE2_Mission_2{
    export class mainPPE2_Mission_2 implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
            let mythis : mainPPE2_Mission_2 = this;
            mythis.page = new Page({id:"PagePPE2_Mission_2",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }

        // Methodes

        // ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainPPE2_Mission_2 =this;
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
            let mythis: mainPPE2_Mission_2 = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "PPE2 - Mission 2 Assurance des véhicules des employés de l’agence HsH de VICHY"});

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "Développer une interface de gestion Web des données relatives aux voitures que les commerciaux utilisent lors de leur déplacement. "
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));

            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Descriptif  :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Pour interface, il fallait créer une base de donnée pour stocker les données d’un recueil effectué par le chef de projet. L’interface sera créée à partir de script PHP, HTML et CSS et devras permettre :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-D’afficher les modelés de voitures dans la base de donnée. ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-L’insertion de nouvelles données dans la table « modele » ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-L’insertion simultanée des données d’une voiture et de sa carte grise ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-L’insertion de nouveau propriétaire",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-De retrouver tous les propriétaires d’un modèle donné.",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                    text: " Et il faudra avoir un « Requêteur », permettant de consulter les tables de la base, sans que l’utilisateur soit obligé d’écrire les requêtes SQL correspondantes.",
                    type: EnumTypeLabel.Standard
                }));

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "La base de donnée pour le site :",
                type: EnumTypeLabel.BigText
            }))
                .ajouter(new DivImage({
                    Image:"BD_01",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Le script :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                    Langage:EnumLangageHighLightCode.Sql,
                    style:EnumStyleHighLightCode.MonokaiSublime,
                    text:"-- *** Tables *** --\n" +
                        "CREATE TABLE Modele  \n" +
                        "(\n" +
                        "\tid_modele INT(3),\n" +
                        "\tmodele VARCHAR(30) NOT NULL,\n" +
                        "\tcarburant ENUM('essence','diesel','gpl','electrique') default 'essence' NOT NULL,\n" +
                        "\tCONSTRAINT pk_modele PRIMARY KEY(id_modele)\n" +
                        ") ENGINE=INNODB;\n" +
                        "\n" +
                        "CREATE TABLE Proprietaire\n" +
                        "(\n" +
                        "\tid_Proprietaire SMALLINT AUTO_INCREMENT,\n" +
                        "\tNomP VARCHAR(15) NOT NULL,\n" +
                        "\tPrenomP VARCHAR(20) NOT NULL,\n" +
                        "\tAdresseP VARCHAR(50) NOT NULL,\n" +
                        "\tVilleP VARCHAR(20) NOT NULL,\n" +
                        "\tCodePostal VARCHAR(5) NOT NULL,\n" +
                        "\tCONSTRAINT pk_proprietaire PRIMARY KEY(id_Proprietaire)\n" +
                        ") ENGINE=INNODB;\n" +
                        "\n" +
                        "CREATE TABLE Vehicule\n" +
                        "(\n" +
                        "\tNumImmat VARCHAR(9),\n" +
                        "\tDatecirculation DATE,\n" +
                        "\tDateCarteGrise DATE,\n" +
                        "\tcouleur ENUM('claire','moyenne','foncee') default 'claire' NOT NULL,\n" +
                        "\tid_modele INT(3) NOT NULL,\n" +
                        "\tid_Proprietaire SMALLINT NOT NULL,\n" +
                        "\tCONSTRAINT pk_Vehicule PRIMARY KEY(NumImmat),\n" +
                        "\tCONSTRAINT fk_Vehicule_Modele FOREIGN KEY(id_modele) REFERENCES Modele(id_modele) ON DELETE CASCADE ON UPDATE CASCADE,\n" +
                        "\tCONSTRAINT fk_Vehicule_proprietaire FOREIGN KEY(id_Proprietaire) REFERENCES Proprietaire(id_Proprietaire) ON DELETE CASCADE ON UPDATE CASCADE\n" +
                        ") ENGINE=INNODB;"
            }))
                .ajouter(new Label({
                text: "Affichage web :",
                type: EnumTypeLabel.BigText
            }))
                .ajouter(new Label({
                text: "Insertion d’un modèle :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_01",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Insertion d’un véhicule : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_02",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Pour l’assignation du propriétaire au véhicule. Il faut saisir le nom ou un début et ensuite un script JavaScript s’exécute en appuient sur « Afficher », ce qui fait une requête « AJAX » au serveur pour récupérai tous les propriétaires correspondant à la saisie.",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_03",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Insertion d’un Propriétaire : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_04",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "La Recherche de tous les propriétaires d’un modèle : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_05",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Le Requêteur :",
                type: EnumTypeLabel.BigText
            }))
                .ajouter(new Label({
                text: "Le Requêteur permet de faire des requêtes sur la base de donnée sans écrire de ligne en SQL. La page se présente avec la sélection de la table et la possibilité de choisir d’utilise une condition dans la requête.  ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"AffichageReq_01",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new DivImage({
                    Image:"AffichageReq_02",
                    typeCadre:EnumTypeCadreImage.Standard
            }));

            mythis.page.AjouteContainte(divcontenu);
        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}