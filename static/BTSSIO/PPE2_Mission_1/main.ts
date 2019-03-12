module PPE2_Mission_1{
    export class mainPPE2_Mission_1 implements ElementX {

        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
            let mythis : mainPPE2_Mission_1 = this;
            mythis.page = new Page({id:"PagePPE2_Mission_1",HeaderFix:true});
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();

        }

        // Methodes

        // ------------- //
        // Bouton Header //
        // ------------- //
        private generateBoutonHeader():void
        {
            let mythis : mainPPE2_Mission_1 =this;
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
            let mythis: mainPPE2_Mission_1 = this;
            let divcontenu: DivConteneur = new DivConteneur({Titre: "PPE2 - Mission 1 Diagnostic, maintenance corrective et evolutive pour la société immobilière HsH (Home Sweet Home)"});

            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }));
            let textObjectif: string = "Diagnostiquer puis effectuée une maintenance corrective et évolutive sur les jeux développés pour le Comité d’entreprise du siège social de HsH."
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
                text: "Les jeux à diagnostiquer sont au nombre de trois en mode console : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-Le Poker ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-Le Mastermind ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-Le Morpion ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "Et un en mode Windows forme : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "-Le Pendu ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "Après les avoir diagnostiquer et noté les bugs trouver, le but sera de les corriger et d’effectué les évolutions demander pour le poker.Les jeux sont tous fait sur Visual studio en C#.",
                type: EnumTypeLabel.Standard
            }));

            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration:EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Diagnostic Morpion :",
                type: EnumTypeLabel.BigText
            }))
                .ajouter(new Label({
                text: "L’affichage de la grille de jeu est manquant et de plus quand le joueur tape dans la Colonne 3 ou la ligne 3 le logiciel plante.",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Diag_01",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "La saisie n'a pas de contrôle pour éviter d’écrie des données incorrectes.",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Diag_02",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
                .ajouter(new Label({
                text: "Les pions peuvent être remplacé (l’utilisateur peut écrire plusieurs fois dans la même case), ils manquent donc un test pour les cases utilisées (sans ça, il n’y aura jamais d’égalité)",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new Label({
                text: "Correction et évolution sur le Morpion :",
                type: EnumTypeLabel.BigText
            }))
                .ajouter(new HighLight_Code({
                    Langage: EnumLangageHighLightCode.Csharp,
                    style:EnumStyleHighLightCode.visualStudio2015dark,
                    text:"using System;\n" +
                        "using System.Runtime.InteropServices;\n" +
                        "\n" +
                        "namespace Morpion\n" +
                        "{\n" +
                        "    class Program\n" +
                        "    {\n" +
                        "        #region Donnees\n" +
                        "\n" +
                        "        //Pour utiliser la fontion C 'getche()'\n" +
                        "        [DllImport(\"msvcrt\")]\n" +
                        "        static extern int _getche();\n" +
                        "\n" +
                        "        public struct Coordonnée\n" +
                        "        {\n" +
                        "           public int x, y;\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion"
            }))
                .ajouter(new Label({
                text: "Pour faciliter la gestion de l’affichage j’ai ajouté une structure de donnée que j’ai nommée coordonnée et qui contient deux variable de type « int ». J’ai ajouté des fonctions qui permet de naviguer dans l’affichage console à partir de coordonnée x et y. Enfaite cela déplace le curseur d’écriture dans la console, ce qui permet d’écrite ou de change des parties déjà afficher sans tous effacer et réécrite. ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                    Langage: EnumLangageHighLightCode.Csharp,
                    style:EnumStyleHighLightCode.visualStudio2015dark,
                    text:"        #region Fonction\n" +
                        "\n" +
                        "        //-------------------------------------------------------------//\n" +
                        "        //                      Fonction EcrireA                       //\n" +
                        "        // Permet d'ecrire une chaine a des coordonnées x et y         //\n" +
                        "        //-------------------------------------------------------------//\n" +
                        "        public static void EcrireA(string s, int x, int y)\n" +
                        "        {\n" +
                        "        Console.SetCursorPosition(x,y);\n" +
                        "        Console.Write(s);\n" +
                        "        }\n" +
                        "        public static void EcrireA(int s, int x, int y) //Surcharge de la fonction EcrireA\n" +
                        "        {\n" +
                        "            Console.SetCursorPosition(x, y);\n" +
                        "            Console.Write(s);\n" +
                        "        }\n" +
                        "\n" +
                        "        //--------------------------------------------------------------//\n" +
                        "        //                       Fonction AllerA                        //\n" +
                        "        // Permet de placer le curseur d'ecriture au coordonnées X et Y //\n" +
                        "        //--------------------------------------------------------------//\n" +
                        "        public static void AllerA(int x, int y)\n" +
                        "        {\n" +
                        "            Console.SetCursorPosition(x,y);\n" +
                        "        }\n" +
                        "\n" +
                        "        //-------------------------------------------------------------//\n" +
                        "        //                      Fonction Saisie                        //\n" +
                        "        // Saisie un caractere a une position precise et avec controle //\n" +
                        "        // Parametres : les coordonnées perttant la saisie             //\n" +
                        "        // mode de passsage : par valeur                               //\n" +
                        "        // retourne : le caractere saisi et controlé                   //\n" +
                        "        //-------------------------------------------------------------//\n" +
                        "        public static int Saisie(int x, int y)\n" +
                        "        {\n" +
                        "            int toSender;\n" +
                        "            do\n" +
                        "            {\n" +
                        "                AllerA(x, y);\n" +
                        "                toSender = (char)_getche();\n" +
                        "            } while (toSender<'1' || toSender>'3');\n" +
                        "            return toSender;\n" +
                        "        }\n" +
                        "\n" +
                        "        //-------------------------------------------------------------//\n" +
                        "        //                 Fonction Coor_grille                        //\n" +
                        "        // Genere un tableau de Coordonnée pour les cases de la grille //\n" +
                        "        // Parametres : les coordonnées de l'emplacement de la grille  //\n" +
                        "        // mode de passsage : par valeur                               //\n" +
                        "        // retourne : Tableau de Coordonnée                            //\n" +
                        "        //-------------------------------------------------------------//\n" +
                        "        public static Coordonnée[] Coor_grille(int x,int y)\n" +
                        "        {\n" +
                        "            Coordonnée[] toSender = new Coordonnée[3];\n" +
                        "            \n" +
                        "            //coordonnée X\n" +
                        "            toSender[0].x = x + 2;\n" +
                        "            toSender[1].x = x + 6;\n" +
                        "            toSender[2].x = x + 10;\n" +
                        "            //coordonnée Y\n" +
                        "            toSender[0].y = y + 1;\n" +
                        "            toSender[1].y = y + 3;\n" +
                        "            toSender[2].y = y + 5;\n" +
                        "\n" +
                        "            return toSender;\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion"
            }))
                .ajouter(new Label({
                text: "Cette partie est le programme qui s’exécuter pour initialiser le jeu. La région « Donnée » Contient des Constants qui permet de définir où vont être les éléments dans l’affichage. Il ensuit les variables permettent de savoir où en est le jeu, les coordonnées des cases de la grille, les données dans la grille… ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                    Langage: EnumLangageHighLightCode.Csharp,
                    style:EnumStyleHighLightCode.visualStudio2015dark,
                    text:"        #region PROGRAMME_PRINCIPAL\n" +
                        "        static void Main(string[] args)\n" +
                        "        {\n" +
                        "            #region Donnée\n" +
                        "\n" +
                        "            // --- Constante ---\n" +
                        "            const int GRILLE_LEFT = 10;\n" +
                        "            const int GRILLE_TOP = 2;\n" +
                        "            const int TEXT_X = 1;\n" +
                        "            const int TEXT_Y = 15;\n" +
                        "            const int SAISIE_X = 12;\n" +
                        "            const int SAISIE_Y = 17;\n" +
                        "            \n" +
                        "\t        int essais = 0 ;                    // compteur d'essais\n" +
                        "            Coordonnée[] coor_grille;           // Coordonnée pour l'affichage sur la grille\n" +
                        "\t        int [,] grille = new int[3,3] ;     // matrice pour stocker les coups joués\n" +
                        "\t        int joueur = 1 ;                    // 1 pour la premier joueur, 2 pour le second\n" +
                        "\t        int l, c ;                    // numéro de ligne et de colonne\n" +
                        "            int j, k ;                          // indices de parcours de matrice\n" +
                        "            bool gagne = false, egaliter = false;\n" +
                        "\n" +
                        "            #endregion"
            }))
                .ajouter(new Label({
                text: "Ensuite c’est initialisation de l’affichage avec l’écriture de l’affichage qui manquer à la version d’origine. Et ensuite terminer sur la boucle qui permet de jouer tant que personne n’a gagner ou qu’il y est une égalité. ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                    Langage: EnumLangageHighLightCode.Csharp,
                    style:EnumStyleHighLightCode.visualStudio2015dark,
                    text:"        #region program\n" +
                        "\n" +
                        "            //--- initialisation de la grille ---\n" +
                        "\t        for (j = 0; j <= 2; j++)\n" +
                        "\t\t        for (k = 0; k <= 2; k++)\n" +
                        "\t\t\t        grille[j,k] = -10;\n" +
                        "\n" +
                        "            //--- definition des coordonnée de la grille ---\n" +
                        "            coor_grille = Coor_grille(GRILLE_LEFT, GRILLE_TOP);\n"+
                        "\n" +
                        "           [...]\n"+
                        "\n" +
                        "            //-------------------------------------------------------------//\n" +
                        "            //                      Boucle de jeu                          //\n" +
                        "            // Le joueur 1 commance et change entre le joueur 2 apres      //\n" +
                        "            // chaque loop. La Boucle ce termine quand un des deux gagne   //\n" +
                        "            // ou si il y a un egaliter (essais == 9)                      //\n" +
                        "            //-------------------------------------------------------------//\n" +
                        "\t        while (!gagne && !egaliter) \n" +
                        "            {\n" +
                        "                //--- Affichage joueur ---\n" +
                        "                EcrireA(\"C'est au tour du joueur \" + joueur + \" :\", TEXT_X, TEXT_Y);\n" +
                        "\n" +
                        "                //--- saisie ligne et Colone\n" +
                        "                do{\n" +
                        "                    l = Saisie(SAISIE_X+10, SAISIE_Y)-49;  \n" +
                        "                    c = Saisie(SAISIE_X+10, SAISIE_Y+1)-49;\n" +
                        "                } while (grille[l,c] == 1 || grille[l, c] == 2);\n" +
                        "\n" +
                        "                //--- Sauvegarde du nouveau coup joué ---\n" +
                        "                grille[l, c] = joueur;\n"+
                        "\n" +
                        "               [...]\n"+
                        "\n" +
                        "\t        //--- Partie fini (egalité) ---\n" +
                        "                essais++;\n" +
                        "                if (essais == 9)\n" +
                        "                    egaliter = true;\n" +
                        "\t        }\n" +
                        "\n" +
                        "\t        //--- Fin de la partie ---\n" +
                        "\t        if (gagne)\n" +
                        "\t\t        EcrireA(\"Le joueur \" + joueur + \" a gagne !\",TEXT_X,TEXT_Y+6) ;\n" +
                        "\t        else\n" +
                        "                EcrireA(\"Egalite !\", TEXT_X,TEXT_Y+6);\n" +
                        "\n" +
                        "            #endregion\n" +
                        "            Console.ReadKey();\n" +
                        "        }\n" +
                        "\n" +
                        "        #endregion\n"
            }))
                .ajouter(new Label({
                text: "Affichage :",
                type: EnumTypeLabel.BigText
            }))
                .ajouter(new Label({
                text: "Morpion :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_01",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
            .ajouter(new Label({
                text: "Mastermind :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_02",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
            .ajouter(new Label({
                text: "Le Pendu :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                    Image:"Affichage_03",
                    typeCadre:EnumTypeCadreImage.Standard
            }))
            .ajouter(new Label({
                text: "Poker :",
                type: EnumTypeLabel.Standard
            }))
            .ajouter(new DivImage({
                    Image:"Affichage_04",
                    typeCadre:EnumTypeCadreImage.Standard
            }));

            mythis.page.AjouteContainte(divcontenu);
        }


        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}