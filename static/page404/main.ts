module Page404{
    export class mainPage404 implements ElementX {

        // Attributs
        private Div : Div;

        // Constructeur
        constructor()
        {
            let mythis : mainPage404 = this;
            mythis.Div = new Div({id:"Page404"});
            mythis.Div.Ajouter(new DivImage({Image:"Error404",typeCadre:EnumTypeCadreImage.Sans}));
            mythis.Div.Ajouter(new Bouton({texte:"Retour a l'accueil",typeBouton:EnumBoutonType.Big,click:function (e) {
                    location.href ='/';
                    e();
                }}));
        }

        // Methodes

        // Propriete implementer par elementX
        get x():JQuery
        {return this.Div.x;}
    }
}