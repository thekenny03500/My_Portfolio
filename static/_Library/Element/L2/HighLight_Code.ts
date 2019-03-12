interface optionHighLightCode extends option
{
    style :EnumStyleHighLightCode;
    Langage :EnumLangageHighLightCode;
    text : string;
}

enum EnumStyleHighLightCode
{
    A11yDark = "a11y-dark",
    AtomOneDark ="Atom-One-Dark",
    Darcula="darcula",
    GruvboxDark="gruvbox-dark",
    VimHybrid="vim-hybrid",
    Lightfair="lightfair",
    MonokaiSublime="Monokai-Sublime",
    Railscasts="railscasts",
    TomorrowNight="Tomorrow-Night",
    TomorrowNightEighties="Tomorrow-Night-Eighties",
    visualStudio2015dark="visualStudio2015dark"
}

enum EnumLangageHighLightCode
{
    TypeScript = "typescript",
    Csharp="cs",
    Json="json",
    Css="css",
    Xml="xml",
    MarkDown="markdown",
    Java="java",
    JavaScript="javascript",
    Python="python",
    Sql="sql",
    Php="php"
}

class HighLight_Code implements ElementX
{
    private Highblock : Pre;

    constructor(option : optionHighLightCode)
    {
        let mythis : HighLight_Code = this;

        option.text = option.text.replace(new RegExp("<","g"),"&lt;").replace(new RegExp(">","g"),"&gt;");

        mythis.Highblock = new Pre({class:"HighLight_Code "+option.style.valueOf()});
        let code : Code = new Code({class:option.Langage.valueOf(),text:option.text});
        hljs.highlightBlock(code.x[0]);
        mythis.Highblock.Ajouter(code);
    }

    get x():JQuery
    {
        return this.Highblock.x;
    }
}