module PPE3_Mission_2{
    export class mainPPE3_Mission_2 implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
            let mythis : mainPPE3_Mission_2 = this;
            mythis.page = new Page({id:"PagePPE3_Mission_2",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }

        // Methodes
        // ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainPPE3_Mission_2 =this;
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
            let mythis: mainPPE3_Mission_2 = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "PPE3 - Mission 2 Maintenance EVOLUTIVE des applications de saisie de questionnaires (web) et de CREATION DYNAMIQUE D’UNE INTERFACE (C#) à partir d’un document XML pour la société ALLIER TESTS"});

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "La société ALLIER TESTS, implantée dans Vichy, intervient dans la mise en œuvre informatique de QUESTIONNAIRES qu’elle propose en tant que TESTS à ses sociétés clientes. Ces tests sont ensuite utilisés lors de l’embauche ou à l’occasion de bilans de compétences de leurs employés. A la demande de ses clients, elle saisit les QUESTIONNAIRES et les QUESTIONS associées dans une base de données MySQL, en utilisant sa plate-forme Intranet (HTML, CSS et PHP). Pour chaque question, on choisit le format sous lequel elle devra être affichée (dans une zone de texte, dans une zone de liste déroulante, dans une zone de liste à choix multiples ou dans des boutons radio). Une fois les données saisies, elles sont EXTRAITES sous la forme d’un fichier XML (voir plus loin)."
            divcontenu.ajouter(new Label({
                text: textObjectif,
                type: EnumTypeLabel.Standard
            }));

            // Descriptif
            divcontenu.ajouter(new Label({
                text: "Descriptif  :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "Pour ce projet nous avons à :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new Label({
                    text: "- Terminer l’extraction des données au format XML du site web.",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new Label({
                    text: "- Créer une base de donnée.",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new Label({
                    text: "- Créer une interface Windows ne permet de traiter qu’un certain type de contrôles graphiques et que l’enregistrement des réponses dans la base de données est à développer en totalité.",
                    type: EnumTypeLabel.Standard
                }));

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                    text: "Base de donnée SQL ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    style: EnumStyleHighLightCode.MonokaiSublime,
                    Langage: EnumLangageHighLightCode.Sql,
                    text:"DROP TABLE IF EXISTS Questions;\n" +
                        "DROP TABLE IF EXISTS Questionnaire;\n" +
                        "\n" +
                        "CREATE TABLE Questionnaire\n" +
                        "(\n" +
                        "cle VARCHAR(12),\n" +
                        "name VARCHAR(20) NOT NULL,\n" +
                        "displayName VARCHAR(30) NOT NULL,\n" +
                        "description VARCHAR(250)NOT NULL DEFAULT 'vide',\n" +
                        "CONSTRAINT pk_Questionnaire PRIMARY KEY(cle)\n" +
                        ") ENGINE=INNODB;\n" +
                        "\n" +
                        "CREATE TABLE Questions\n" +
                        "(\n" +
                        "cle VARCHAR(12),\n" +
                        "rang INT(2),\n" +
                        "typeQ ENUM('combo','text','liste','radio')NOT NULL DEFAULT 'text',\n" +
                        "name VARCHAR(20)NOT NULL,\n" +
                        "text VARCHAR(250)NOT NULL,\n" +
                        "reponse1 VARCHAR(250)NOT NULL DEFAULT 'vide',\n" +
                        "reponse2 VARCHAR(250)NOT NULL DEFAULT 'vide',\n" +
                        "reponse3 VARCHAR(250)NOT NULL DEFAULT 'vide',\n" +
                        "reponse4 VARCHAR(250)NOT NULL DEFAULT 'vide',\n" +
                        "reponse5 VARCHAR(250)NOT NULL DEFAULT 'vide',\n" +
                        "defaut SMALLINT NOT NULL DEFAULT 1,\n" +
                        "CONSTRAINT pk_Questions PRIMARY KEY(rang),\n" +
                        "CONSTRAINT fk_Questions_questionnaire FOREIGN KEY(cle) REFERENCES Questionnaire(cle) ON DELETE CASCADE ON UPDATE CASCADE\n" +
                        ") ENGINE=INNODB;\n"
                }))
                .ajouter(new Label({
                    text: "Partie du PHP :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new Label({
                    text: "Pour l’extraction de donnée au format XML en PHP, j’ai utilisé l’objet DOMDocument qui permet de créer de générer de la Dom Html ou XML. Et pour remplir le dom j’ai donc créer une fonction récursive « array_to_xml » qui prend un array et rend l’objet DOMDocument, il suffit ensuite de sauvegarder.",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    style: EnumStyleHighLightCode.MonokaiSublime,
                    Langage: EnumLangageHighLightCode.Php,
                    text:"$leQuestionnaire = array(\n" +
                        "'@name'=>'questionnaire',\n" +
                        "'@attributes'=> $attributes_Questionnaire,\n" +
                        "'@Contenus'=>$Contenus,\n" +
                        ");\n" +
                        "\n" +
                        "$Dom_xml = new DomDocument(\"1.0\",\"ISO-8859-1\");\n" +
                        "$Dom_xml->preserveWhiteSpace = false;\n" +
                        "$Dom_xml->formatOutput = true;\n" +
                        "\n" +
                        "array_to_xml($leQuestionnaire,$Dom_xml,false);\n" +
                        "\n" +
                        "$Dom_xml->save('../xml/'.$fichierName.'.xml');\n" +
                        "\n" +
                        "session_start();\n" +
                        "$_SESSION[\"fichierName\"] = '../xml/'.$fichierName.'.xml';\n"
                }))
                .ajouter(new Label({
                    text: "Exemple de xml :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    style: EnumStyleHighLightCode.MonokaiSublime,
                    Langage: EnumLangageHighLightCode.Xml,
                    text:"<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n" +
                        "<questionnaire cle=\"18115101255\" name=\"TEST\" displayName=\"test\">\n" +
                        "  <description>vide</description>\n" +
                        "  <question type=\"text\" name=\"text\">\n" +
                        "    <text>text</text>\n" +
                        "    <defaultreponse>text</defaultreponse>\n" +
                        "    <maxCharacters>75</maxCharacters>\n" +
                        "  </question>\n" +
                        "  <question type=\"radio\" name=\"radio\">\n" +
                        "    <text>radio</text>\n" +
                        "    <reponses>\n" +
                        "      <reponse default=\"true\">radio1</reponse>\n" +
                        "      <reponse default=\"false\">radio2</reponse>\n" +
                        "      <reponse default=\"false\">radio3</reponse>\n" +
                        "    </reponses>\n" +
                        "  </question>\n" +
                        "  <question type=\"combo\" name=\"liste\">\n" +
                        "    <text>liste</text>\n" +
                        "    <reponses>\n" +
                        "      <reponse default=\"true\">1</reponse>\n" +
                        "      <reponse default=\"false\">2</reponse>\n" +
                        "      <reponse default=\"false\">3</reponse>\n" +
                        "      <reponse default=\"false\">4</reponse>\n" +
                        "    </reponses>\n" +
                        "  </question>\n" +
                        "  <question type=\"liste\" name=\"liste multiples\">\n" +
                        "    <text>liste multiples</text>\n" +
                        "    <reponses>\n" +
                        "      <reponse default=\"true\">1</reponse>\n" +
                        "      <reponse default=\"false\">2</reponse>\n" +
                        "      <reponse default=\"false\">3</reponse>\n" +
                        "      <reponse default=\"false\">4</reponse>\n" +
                        "      <reponse default=\"false\"/>\n" +
                        "    </reponses>\n" +
                        "  </question>\n" +
                        "</questionnaire>\n"
                }))
                .ajouter(new Label({
                    text: "Methode de generation des diffent types de question en C# :",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new HighLight_Code({
                    style: EnumStyleHighLightCode.MonokaiSublime,
                    Langage: EnumLangageHighLightCode.Csharp,
                    text:"        //-----------------------------------------------------------------------------------------\n" +
                        "        // Ensemble des méthodes qui, suivant le cas vont AJOUTER une ComboBox, une ListBox, \n" +
                        "        // une TextBox ou des RadioButtons à la collection passée en paramètre. \n" +
                        "        //\n" +
                        "        // Retournent des coordonnées (X,Y) permettant de définir la dimension de la feuille \n" +
                        "        // qui va contenir ces contrôles...\n" +
                        "        //\n" +
                        "        // Ces méthodes sont appelées par la méthode \"CreerAPartirXML\" qui crée d'abord\n" +
                        "        // dynamiquement une feuille, puis l'ensemble de ses contrôles, et ceci à partir des \n" +
                        "        // données d'un document XML (un contrôle par noeud <question>)\n" +
                        "        //\n" +
                        "        // Les paramètres sont les suivants :\n" +
                        "        // \ta) L'objet noeud <question> en cours\n" +
                        "        // \tb) La collection de contrôles de la feuille\n" +
                        "        //\tc) L'emplacement (coordonnées X et Y) en cours (permet de placer les nouveaux contrôles)\n" +
                        "        //\td) L'objet premier noeud du document XML (<questionnaire>)\n" +
                        "        //------------------------------------------------------------------------------------------\n" +
                        "        private Point AddComboBox(XmlNode unNoeud, Control.ControlCollection desControles, Point unEmplacement)\n" +
                        "        {\n" +
                        "            // Instancier une ComboBox\n" +
                        "            ComboBox cbx = new ComboBox();\n" +
                        "            desControles.Add(cbx);\n" +
                        "            \n" +
                        "            // Initialiser certaines de ses propriétés\n" +
                        "            cbx.Name = unNoeud.Attributes[\"name\"].Value;\n" +
                        "            cbx.Height = HAUTEUR_PAR_LIGNE;\n" +
                        "            cbx.Width = LARGEUR_CONTROLES;\n" +
                        "            cbx.Location = unEmplacement;\n" +
                        "            unEmplacement.Y += cbx.Height + 10;\n" +
                        "            \n" +
                        "            // Valeur de l'attribut \"name\" de la balise <question> en cours\n" +
                        "\n" +
                        "            // Parcours de l'ensemble de balises filles <reponses> et <reponse> \n" +
                        "            // associés à la balise <question> en cours...\n" +
                        "            // POUR CHAQUE <reponse> :\n" +
                        "            //      * Ajoute à la ComboBox le texte associé à la balise <reponse> en cours...\n" +
                        "            //      * Si une valeur par défaut (attribut \"default\") a été spécifié, l'affecter à la propriété \"Text\" de la ComboBox\n" +
                        "            //      * Créer le Label associé\n" +
                        "            //      * Valeur de la balise fille <text> associée à la balise <question> en cours\n" +
                        "            //      * Ajouter ces 2 contrôles à la collection et mettre à jour les coordonnées (X,Y)\n" +
                        "            XmlNodeList lesRep = unNoeud.SelectSingleNode(\"reponses\").SelectNodes(\"reponse\");\n" +
                        "            foreach (XmlNode rep in lesRep)\n" +
                        "            {\n" +
                        "                cbx.Items.Add(rep.InnerText);\n" +
                        "\n" +
                        "                if(rep.Attributes[\"default\"].Value == \"true\" )\n" +
                        "                    cbx.SelectedIndex = cbx.Items.Count-1;\n" +
                        "            }\n" +
                        "    \n" +
                        "            // Retour de l'emplacement pour placer le nouveau contrôle\n" +
                        "            return unEmplacement;\n" +
                        "        }\n" +
                        "\n" +
                        "        private Point AddListBox(XmlNode unNoeud, Control.ControlCollection desControles, Point unEmplacement)\n" +
                        "        {\n" +
                        "            // Création d'un contrôle ListBox\n" +
                        "            ListBox lBox = new ListBox();\n" +
                        "            desControles.Add(lBox);\n" +
                        "\n" +
                        "            lBox.Name = unNoeud.Attributes[\"name\"].Value;\n" +
                        "            lBox.SelectionMode = SelectionMode.MultiSimple;\n" +
                        "            lBox.Width = LARGEUR_CONTROLES;\n" +
                        "            lBox.Location = unEmplacement;\n" +
                        "            \n" +
                        "            // Parcours de l'ensemble de noeuds \"fils\" <reponses> et <reponse> \n" +
                        "            // associés au noeud <question> en cours...\n" +
                        "            XmlNodeList lesRep = unNoeud.SelectSingleNode(\"reponses\").SelectNodes(\"reponse\");\n" +
                        "            foreach (XmlNode rep in lesRep)\n" +
                        "            {\n" +
                        "                lBox.Items.Add(rep.InnerText);\n" +
                        "\n" +
                        "                if (rep.Attributes[\"default\"].Value == \"true\")\n" +
                        "                    lBox.SelectedIndex = lBox.Items.Count - 1;\n" +
                        "            }\n" +
                        "            // les coordonnées (X,Y)\n" +
                        "            \n" +
                        "            lBox.Height = lBox.Items.Count * HAUTEUR_PAR_LIGNE;\n" +
                        "            unEmplacement.Y += lBox.Height + 10;\n" +
                        "\n" +
                        "            // Retour de l'emplacement pour placer le nouveau contrôle\n" +
                        "            return unEmplacement;\n" +
                        "        }\n" +
                        "\n" +
                        "        private Point AddRadioButtons(XmlNode unNoeud, Control.ControlCollection desControles, Point unEmplacement)\n" +
                        "        {\n" +
                        "            // Création d'une GroupBox contenant les boutons radio\n" +
                        "            GroupBox gbox = new GroupBox();\n" +
                        "            desControles.Add(gbox);\n" +
                        "            gbox.Location = unEmplacement;\n" +
                        "            gbox.Width = LARGEUR_CONTROLES;\n" +
                        "            gbox.Name = unNoeud.Attributes[\"name\"].Value;\n" +
                        "            \n" +
                        "            // N\"cessaire pour positioner les RadioButtons et redimensionner le GroupBox les contenant\n" +
                        "            Point monRadioPoint = new Point(5, 10);\n" +
                        "\n" +
                        "            // Parcours de chaque balise <reponse>, pour chacun d'eux, création d'un RadioButton\n" +
                        "            // puis l'ajouter au GroupBox\n" +
                        "            XmlNodeList lesRep = unNoeud.SelectSingleNode(\"reponses\").SelectNodes(\"reponse\");\n" +
                        "            foreach (XmlNode rep in lesRep)\n" +
                        "            {\n" +
                        "                RadioButton rbutton = new RadioButton();\n" +
                        "                rbutton.Text = rep.InnerText;\n" +
                        "                rbutton.Checked = rep.Attributes[\"default\"].Value == \"true\";\n" +
                        "                rbutton.Height = HAUTEUR_PAR_LIGNE;\n" +
                        "                rbutton.Width = LARGEUR_CONTROLES - 10;\n" +
                        "                rbutton.Location = monRadioPoint;\n" +
                        "                monRadioPoint.Y += HAUTEUR_PAR_LIGNE + 5;\n" +
                        "                gbox.Controls.Add(rbutton);\n" +
                        "            }\n" +
                        "\n" +
                        "            // Redimensionneer le GroupBox \n" +
                        "            gbox.Height = HAUTEUR_PAR_LIGNE * lesRep.Count +20;\n" +
                        "\n" +
                        "            unEmplacement.Y += gbox.Height + 10;\n" +
                        "\n" +
                        "            // Ajout à la collection\n" +
                        "\n" +
                        "            return unEmplacement;\n" +
                        "        }\n" +
                        "\n" +
                        "        private Point AddTextBox(XmlNode unNoeud, Control.ControlCollection desControles, Point unEmplacement)\n" +
                        "        {\n" +
                        "            // Création d'un contrôle TextBox.\n" +
                        "            TextBox textB = new TextBox();\n" +
                        "            desControles.Add(textB);\n" +
                        "\n" +
                        "            textB.Name = unNoeud.Attributes[\"name\"].Value;\n" +
                        "            textB.Width = LARGEUR_CONTROLES;\n" +
                        "            textB.Location = unEmplacement;\n" +
                        "            \n" +
                        "            // Il y a-t-il une réponse par défaut ? (cf. noeud <defaultreponse>\n" +
                        "            XmlNode defaultrep = unNoeud.SelectSingleNode(\"defaultreponse\");\n" +
                        "            textB.Text = (defaultrep == null) ? \"\" : defaultrep.InnerText;\n" +
                        "\n" +
                        "            // Il y a-t-il un nombre maximal de caractères ? (cf. noeud <maxCharacters>)\n" +
                        "            XmlNode maxCara = unNoeud.SelectSingleNode(\"maxCharacters\");\n" +
                        "            textB.MaxLength = (maxCara == null) ? 75 : int.Parse(maxCara.InnerText);\n" +
                        "\n" +
                        "            // Calculer le nombre de lignes qui devront être affichées\n" +
                        "            if (textB.MaxLength > 0)\n" +
                        "            {\n" +
                        "                int numLines = (textB.MaxLength / CARACTERES_PAR_LIGNE) + 1;\n" +
                        "\n" +
                        "                // Calculer la largeur de la TextBox, et par conséquent s'il y a lieu\n" +
                        "                // d'avoir des barres de défilement\n" +
                        "                if (numLines == 1)\n" +
                        "                    textB.Multiline = false;\n" +
                        "                else\n" +
                        "                {\n" +
                        "                    if (numLines >= 4)\n" +
                        "                    {\n" +
                        "                        textB.Multiline = true;\n" +
                        "                        textB.Height = 4 * HAUTEUR_PAR_LIGNE;\n" +
                        "                        textB.ScrollBars = ScrollBars.Vertical;\n" +
                        "                    }\n" +
                        "                    else\n" +
                        "                    {\n" +
                        "                        textB.Multiline = true;\n" +
                        "                        textB.Height = numLines * HAUTEUR_PAR_LIGNE;\n" +
                        "                        textB.ScrollBars = ScrollBars.None;\n" +
                        "                    }\n" +
                        "                }\n" +
                        "            }\n" +
                        "\n" +
                        "            unEmplacement.Y += textB.Height + 10;\n" +
                        "\n" +
                        "            // Retour de l'emplacement pour placer le nouveau contrôle\n" +
                        "            return unEmplacement;\n" +
                        "        }"
                }))
                .ajouter(new Label({
                    text: "Windows form : ",
                    type: EnumTypeLabel.Standard
                }))
                .ajouter(new DivImage({
                    Image: "WinForm_01",
                    typeCadre: EnumTypeCadreImage.Standard
                }));

            mythis.page.AjouteContainte(divcontenu);
        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}