interface optionImage extends option{
    Image:string
    typeCadre:EnumTypeCadreImage
}

enum EnumTypeCadreImage {
    Sans="sans",
    Round="Round",
    Standard="Standard",
    StandardRound="StandardRound"
}

class DivImage implements ElementX{

    private div : Div;

    constructor(option:optionImage)
    {
        let mythis : DivImage = this;

        let classe : string = "Image_contener "
        classe += "Cadre_"+(option.typeCadre != null ? option.typeCadre.toString():EnumTypeCadreImage.Sans)+" ";
        classe += "Image_"+option.Image;

        mythis.div = new Div({class:classe, id:option.id});
        mythis.div.Ajouter(new Span({Icone:"Image_"+option.Image}));

        if(option.class != null)
            mythis.div.addClass(option.class);
    }

    get x():JQuery
    {
        return this.div.x;
    }
}