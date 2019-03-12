interface optionDivEvent extends option{
    MouseClick?:()=>void,
    MouseHover?:()=>void,
    MouseOut?:()=>void,
    title?:string,
    Init:ElementX
}

class DivEvent implements ElementX{
    private div:Div;

    constructor(option:optionDivEvent){
        let mythis :DivEvent =this;
        mythis.div = new Div({class:option.class,id:option.id,title:option.title});
        mythis.div.x.click(function (){
            if(option.MouseClick != null)
                option.MouseClick();
        });
        mythis.div.x.hover(
            function () {
                if(option.MouseHover != null)
                    option.MouseHover();
        },
            function () {
                if(option.MouseOut != null)
                    option.MouseOut();
        });
        mythis.div.Ajouter(option.Init);
    }

    public addclass(uneclass:string){
        let mythis:DivEvent=this;
        mythis.addclass(uneclass);
    }

    get x():JQuery{
        return this.div.x;
    }
}