module index{
    export class mainIndex implements ElementX
    {
        // Attributs
        private page : Page;

        // Constructeur
        constructor()
        {
           let mythis : mainIndex = this;
           mythis.page = new Page({id:"PageIndex"});
           mythis.GenerateBoutonHeader();
           mythis.GenaratContainte();
        }

        // Methodes
        private GenerateBoutonHeader()
        {
            let mythis : mainIndex = this;
            // bouton d'acceuil
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                    LinkIndex.GoAcceuil();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"Acceuil",
               title:"Acceuil"
           }));
            // bouton presentation
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                    LinkIndex.GoAPropos();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"A Propos",
               title:"A Propos"
           }));
            // CV
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                    LinkIndex.GoCV();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"CV",
               title:"Curriculum Vitae"
           }));
            // portfolio
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                    LinkIndex.GoPortfolio();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"Portfolio",
               title:"Portfolio"
           }));
            // Contact
            mythis.page.Ajouteheader(new Bouton({
               click:function (e) {
                    LinkIndex.GoContact();
                    e();
               },
               typeBouton: EnumBoutonType.textUnique,
               texte:"Contact",
               title:"Contact"
           }));
        }

        private GenaratContainte()
        {
            let mythis : mainIndex = this;

            mythis.Accuiel();
            mythis.Apropos();
            mythis.CV();
            mythis.Portfolio();
            mythis.Contact();

        }

        private Accuiel()
        {
            let mythis : mainIndex = this;

            let backgroundGalactic : BackGround = new BackGround({id:"Acceuil",image:"Galaxie"});
            let Dock :DockPanel = new DockPanel({});
            let stack:Stackpanel =new Stackpanel({class:"StackAccueil"});
            backgroundGalactic.Ajoute(Dock);
            Dock.ajouter(stack,EnumDockPosition.right);

            // DivTitre
            let Titre:Stackpanel = new Stackpanel({});
            Titre.ajouter(new Label({text:"PortFolio",type:EnumTypeLabel.Titre}));
            Titre.ajouter(new Label({text:"Aimeric-Thomas Dalvai",type:EnumTypeLabel.Titre}));
            stack.ajouter(new DivConteneur({
                ini:Titre,
                class: "ConteneurAccuiel"
           }));

            // bouton presentation
            stack.ajouter(new Bouton({
               click:function (e) {
                    LinkIndex.GoAPropos();
                    e();
               },
               typeBouton: EnumBoutonType.Big,
               texte:"A Propos",
               title:"A Propos"
           }));

            // CV
            stack.ajouter(new Bouton({
               click:function (e) {
                    LinkIndex.GoCV();
                    e();
               },
               typeBouton: EnumBoutonType.Big,
               texte:"Curriculum Vitae",
               title:"Curriculum Vitae"
           }));

            // portfolio
            stack.ajouter(new Bouton({
               click:function (e) {
                    LinkIndex.GoPortfolio();
                    e();
               },
               typeBouton: EnumBoutonType.Big,
               texte:"Portfolio",
               title:"Portfolio"
           }));

             // Contact
            stack.ajouter(new Bouton({
               click:function (e) {
                    LinkIndex.GoContact();
                    e();
               },
               typeBouton: EnumBoutonType.Big,
               texte:"Contact",
               title:"Contact"
           }));

            mythis.page.AjouteContainte(backgroundGalactic);
        }

        private Apropos()
        {
            let mythis : mainIndex = this;

            let age : number = new Date(Date.now()).getFullYear() - 1999;

            let Aproposdiv : DivConteneur = new DivConteneur({class:"DivAPropos",id:"APropos" ,Titre:"A Propos"});
            let Dock : DockPanel = new DockPanel({});

            // ------------ //
            // Presentation //
            // ------------ //
            let presentation : Stackpanel = new Stackpanel({});
            presentation.ajouter(new Label({text:"Presentation",type:EnumTypeLabel.Titre}));
            let DivTexte : Div = new Div({class:"DivTextPresentation"});

            let text : string = "Je suis un étudiant de 19 ans qui aime découvrir et apprendre."+
                " Je suis titulaire du permis est peut donc me déplacer. Né le 6 août, à Clermont-Ferrand en Auvergne."+"" +
                " J’habite à Monetay sur Allier et je suis passionnée par l’informatique depuis mon plus jeune âge et souhaite travailler dans ce secteur."+"" +
                " J’étudie en deuxième année de BTS SIO avec l’option SLAM (solutions logicielles et applications métiers)."+"" +
                " J’ai des bases de langage en C#, Java, Lua, JS, TS, VBs, Python."+
                " J’ai comme Hobby les jeux vidéo, la création (informatique, programme, Bricole, Électronique…), l'informatique et le dessin.";

            DivTexte.Ajouter(new Label({text:text,type:EnumTypeLabel.Standard}));
            presentation.ajouter(DivTexte);
            Dock.ajouter(presentation,EnumDockPosition.bot);

            // ----- //
            // Photo //
            // ----- //
            let PhotoProfil : DivImage = new DivImage({Image:"Profil",typeCadre:EnumTypeCadreImage.Standard});
            Dock.ajouter(PhotoProfil,EnumDockPosition.left);

            // --------------- //
            // Caracteristique //
            // --------------- //
            let Caratere : Stackpanel = new Stackpanel({class:"Caracteristique"});
            Caratere.ajouter(new Label({text:"Nom  :  Dalvai",type:EnumTypeLabel.BigText}));
            Caratere.ajouter(new Label({text:"Prenom  :  Aimeric-Thomas",type:EnumTypeLabel.BigText}));
            Caratere.ajouter(new Label({text:"Age  :  "+age+" Ans",type:EnumTypeLabel.BigText}));
            Dock.ajouter(Caratere,EnumDockPosition.left,"Caratere");

            Aproposdiv.ajouter(Dock);
            mythis.page.AjouteContainte(Aproposdiv);
        }

        private CV()
        {
            let mythis : mainIndex = this;
            let CVdiv : DivConteneur = new DivConteneur({class:"DivCV",id:"CV" ,Titre:"Curriculum Vita"});

            let stack : Stackpanel = new Stackpanel({});

            let boxer : Boxer = new Boxer({
                BeforeOpen:function (thisboxer:Boxer) {
                    thisboxer.Ajouter(new Viewpdf({filepath:"index/Content_File/Dalvai_Aimeric_CV_2018_02.pdf"}));
                },
                AfterClose:function (thisboxer:Boxer) {
                    thisboxer.Empty();
                }
            });

            stack.ajouter(new Bouton({
                texte: "Telecharger CV",
                click: function (e) {
                    boxer.Afficher();
                    e();
                },
                typeBouton: EnumBoutonType.Big,
                title:"Telecharger"
            }));

            // --------------------- //
            // Experiances et etudes //
            // --------------------- //
            stack.ajouter(new Bando({Text:"Experiences"}));
            let Exp :ExperienceView = new ExperienceView({
                init:[
                    {type:EnumTypeExperience.Travail,Titre:"Vacance d'été 2018 : Développeur (CS3I)",Text:"- Développement de nouveau module en TypeScript pour le site Emed<br>- Mise en forme de page web (SCSS)<br>- Evolution de la technologie de développement de CS3I"},
                    {type:EnumTypeExperience.Travail,Titre:"2018 : Stage de Premier Année BTS Sio – Développeur (CS3I)",Text:"- Développement de nouveau module en TypeScript pour le site Emed<br>- Evolution de la technologie de développement de CS3I"},
                    {type:EnumTypeExperience.Etude,Titre:"2017-2019 : [en cour] BTS SIO (Système informatique au Organisation) (2 Année)",Text:"En cour, 2eme année en options développement informatique (SLAM) a Albert Londres Vichy . Presentation du BTS : Formation en deux ans(4 semestres) orientée dans l'informatique, proposant deux filières. SISR, filière orientée réseau informatique. SLAM, filière orientée développement de logiciel."},
                    {type:EnumTypeExperience.Travail,Titre:"2017 : Stage de Terminal - Administrateur réseau (Unither industrie/Gannat)",Text:"-Développement d’une fonction sur VBS pour désinstallation de programme en masse.<br>-Configuration de Switch et mise en place dans le réseau<br>-Configuration d’un serveur"},
                    {type:EnumTypeExperience.Travail,Titre:"2016 : 2eme partie Stage de premier - Stagiaire (Saint-Pourçain informatique)",Text:"-Nettoyage d’ordinateur (software)<br>-Remplacement de pièce d’ordinateur portable/fixe (écran, disque dur…)<br>-Infographie (création d’une affiche pour un évènement)<br>-Test du Développement sur un système Arduino"},
                    {type:EnumTypeExperience.Travail,Titre:"2016 : 1er partie Stage de premier - Maintenance informatique (SPE MDI/Montluçon)",Text:"-Nettoyage d’ordinateur (software)<br>-Montage de nouvel ordinateur sur commande<br>-Diagnostique d’ordinateur (rechercher de problème Software/Hardware)<br>-Conseil client magasin<br>-Remplacement de pièce d’ordinateur portable/fixe (écran, disque dur…)"},
                    {type:EnumTypeExperience.Travail,Titre:"2014-2015 : Stage de seconde - Administrateur réseau (Unither industrie/Gannat)",Text:"-Changements d’ordinateurs (mise en place et installation)<br>-Intervention sur place (problème informatique)<br>-Renvoie des ordinateurs changés"},
                    {type:EnumTypeExperience.Etude,Titre:"2014-2017 : Bac Pro Sen (Système Electronique Numérique)",Text:"Obtenue avec mention bien, Bac Professionnel Porter sur l’électronique et le Réseau et télécom. Etude a Albert Einstein Montlucon."}
                    ]
            });
            stack.ajouter(Exp);

            // ---------- //
            // Competance //
            // ---------- //
            stack.ajouter(new Bando({Text:"Competences"}));

            let CompetencesView : CompetenceView = new CompetenceView({});

            CompetencesView.ajouter({Titre:"C#(Sharp)",Pourcentage:80,Icone:"Csharp",color:EnumColorCompetenceView.Violet});
            CompetencesView.ajouter({Titre:"Java",Pourcentage:40,Icone:"java",color:EnumColorCompetenceView.Rouge});
            CompetencesView.ajouter({Titre:"HTML 5",Pourcentage:60,Icone:"HTML",color:EnumColorCompetenceView.Orange});
            CompetencesView.ajouter({Titre:"CSS 3(SCSS)",Pourcentage:60,Icone:"CSS",color:EnumColorCompetenceView.Bleu});
            CompetencesView.ajouter({Titre:"JavaScript (JS)",Pourcentage:75,Icone:"JS",color:EnumColorCompetenceView.Jaune});
            CompetencesView.ajouter({Titre:"TypeScript (TS)",Pourcentage:75,Icone:"TS",color:EnumColorCompetenceView.Bleu_Claire});
            CompetencesView.ajouter({Titre:"Lua",Pourcentage:35,Icone:"Lua",color:EnumColorCompetenceView.Bleu_Foncer});
            CompetencesView.ajouter({Titre:"Docker",Pourcentage:25,Icone:"docker",color:EnumColorCompetenceView.Cyan});

            stack.ajouter(CompetencesView);

            CVdiv.ajouter(stack);

            mythis.page.AjouteContainte(CVdiv);
        }

        private Portfolio()
        {
            let mythis : mainIndex = this;
            let Portfoliodiv : DivConteneur = new DivConteneur({class:"DivPortfolio",id:"Portfolio" ,Titre:"Portfolio"});

            Portfoliodiv.ajouter(new NavPortfolio({
                init:[
                    {Image:"Earth_Planet", Titre:"BTS SIO",Init:[
                            {Titre:"PPE2 - Mission 1",Title:"Maintenance Corrective et évolutive d'un ensemble de jeux",Link:"PPE2_Mission_1"},
                            {Titre:"PPE2 - Mission 2",Title:"Gestion des cartes grises des employés",Link:"PPE2_Mission_2"},
                            {Titre:"PPE2 - Mission 3",Title:"Mise en oeuvre d'un prototype de comparaison",Link:"PPE2_Mission_3"},
                            {Titre:"PPE2 - Mission 4",Title:"Maintenance evolutive (approche Objet) du jeu de Poker",Link:"PPE2_Mission_4"},
                            {Titre:"Stage - 1er Annnée",Title:"Stage de 4 Semaine a CS3I",Link:"Stage_S1SIO"},
                            {Titre:"PPE3 - Mission 1",Title:"Musée des Célestins",Link:"PPE3_Mission_1"},
                            {Titre:"PPE3 - Mission 2",Title:"QCM web Allier Tests",Link:"PPE3_Mission_2"},
                            {Titre:"PPE3 - Mission 3",Title:"Conception d'une DLL",Link:"PPE3_Mission_3"},
                            {Titre:"PPE3 - Mission 4",Title:"Facturation VICHY PAPETERIE",Link:"PPE3_Mission_4"},
                            {Titre:"Stage - 2eme Annnée",Title:"Stage de 6 Semaine a CS3I",Link:"Stage_S2SIO"},
                        ]},
                    {Image:"Nothing_Planet", Titre:"Comming Soon",Init:[]}
                ]
            }));

            mythis.page.AjouteContainte(Portfoliodiv);
        }

        private Contact()
        {
            let mythis : mainIndex = this;
            let Contactdiv : DivConteneur = new DivConteneur({class:"DivContact",id:"Contact" ,Titre:"Contact"});
            let contactStack:Stackpanel = new Stackpanel({});
            Contactdiv.ajouter(contactStack);

            contactStack.ajouter(new Label({text:"Mail : dalvai.aimeric@gmail.com",type:EnumTypeLabel.BigText,Decoration:EnumDecoLabel.Souligner}));
            contactStack.ajouter(new Label({text:"Mes réseaux sociaux:",type:EnumTypeLabel.BigText,Decoration:EnumDecoLabel.Souligner}));

            // Lien reseaux sociaux
            let warpSocial : Warppanel = new Warppanel({});
            // Facebook
            warpSocial.ajouter(new DivEvent({Init:new DivImage({typeCadre: EnumTypeCadreImage.Sans, Image:"LogoFB"}),
                title:"Facebook",
                class:"Cursor",
                MouseClick: function () {
                    location.href = "https://www.facebook.com/aimericthomas.dalvai";
                }}));
            // Instagram
            warpSocial.ajouter(new DivEvent({Init:new DivImage({typeCadre: EnumTypeCadreImage.Sans, Image:"LogoInsta"}),
                title:"Instagram",
                class:"Cursor",
                MouseClick:function () {
                    location.href = "https://www.instagram.com/lord_thekenny/";
                }
            }));
            // GitHub
            warpSocial.ajouter(new DivEvent({Init:new DivImage({typeCadre: EnumTypeCadreImage.Sans, Image:"LogoGitHub"}),
                title:"GitHub",
                class:"Cursor",
                MouseClick:function () {
                    location.href = "https://github.com/thekenny03500";
                }
            }));
            // LinkedIn
            warpSocial.ajouter(new DivEvent({Init:new DivImage({typeCadre: EnumTypeCadreImage.Sans, Image:"LogoIn"}),
                title: "LinkedIn",
                class:"Cursor",
                MouseClick:function () {
                    location.href = "https://www.linkedin.com/in/aimeric-dalvai-605432173/";
                }
            }));
            // Discord
            let discordDiv : Div = new Div({title:"Discord : thekenny03500#2080"});
            discordDiv.Ajouter(new DivImage({typeCadre: EnumTypeCadreImage.Sans, Image:"LogoDiscord"}));
            warpSocial.ajouter(discordDiv);

            contactStack.ajouter(warpSocial);

            mythis.page.AjouteContainte(Contactdiv);

        }

        // Propriete implementer par elementX
        get x():JQuery
        {return this.page.x;}
    }
}