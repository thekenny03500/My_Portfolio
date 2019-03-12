var PPE3_Mission_3;
(function (PPE3_Mission_3) {
    var mainPPE3_Mission_3 = /** @class */ (function () {
        // Constructeur
        function mainPPE3_Mission_3() {
            var mythis = this;
            mythis.page = new Page({ id: "PagePPE3_Mission_3", HeaderFix: true });
            mythis.generateBoutonHeader();
            mythis.GenerateContainte();
        }
        // Methodes
        // ------------- //
        // Bouton Header //
        // ------------- //
        mainPPE3_Mission_3.prototype.generateBoutonHeader = function () {
            var mythis = this;
            // bouton Retour
            mythis.page.Ajouteheader(new Bouton({
                click: function (e) {
                    window.history.back();
                    e();
                },
                typeBouton: EnumBoutonType.textUnique,
                texte: "Retour",
                title: "Retour"
            }));
        };
        // ----- //
        // Corps //
        // ----- //
        mainPPE3_Mission_3.prototype.GenerateContainte = function () {
            var mythis = this;
            var divcontenu = new DivConteneur({ Titre: "PPE3 - Mission 3 Conception et mise en œuvre d’un COMPOSANT UTILITAIRE DE GESTION DE PROCEDURES STOCKEES MySQL depuis une interface C#" });
            // Objectif
            divcontenu.ajouter(new Label({
                text: "Objectif :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }));
            var textObjectif = "La société DIMP (« Développement informatique Midi-Pyrénées ») est une SSII régionale implantée à MURET (Haute-Garonne). Depuis " +
                "2011, la société DIMP a signé un accord de « joint-venture » avec la société SIVY afin d’échanger leurs compétences respectives sur " +
                "des projets bien précis. " +
                "Actuellement, elle est en charge d’un projet de gestion des intérimaires pour le département des ressources humaines du CNES " +
                "(Centre National d’Etudes Spatiales). Ce projet de maintenance corrective et évolutive se base sur une application C#/.NET / MySQL " +
                "développée par des étudiants en licence informatique de l’Université Paul Sabatier à Toulouse.";
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
                text: "Créer une DDL permettent de faciliter l’appel de procedures stockées Mysql en C#.",
                type: EnumTypeLabel.Standard
            }));
            // Resultat
            divcontenu.ajouter(new Label({
                text: "Resultat :",
                type: EnumTypeLabel.BigText,
                Decoration: EnumDecoLabel.Souligner
            }))
                .ajouter(new Label({
                text: "Exemple de procedure : ",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                Langage: EnumLangageHighLightCode.Sql,
                style: EnumStyleHighLightCode.MonokaiSublime,
                text: "delimiter $\n" +
                    "\n" +
                    "-- ****************************\n" +
                    "-- Procédure SANS paramètres\n" +
                    "-- Compte le nombre de pilotes\n" +
                    "-- ****************************\n" +
                    "DROP PROCEDURE IF EXISTS ComptePilotes$\n" +
                    "CREATE PROCEDURE ComptePilotes() \n" +
                    "BEGIN\n" +
                    "\tDECLARE nb INT;\n" +
                    "\tSELECT\tCOUNT(*)\n" +
                    "\tINTO \tnb\n" +
                    "\tFROM    Pilote;\n" +
                    "\t\n" +
                    "\tSELECT nb;\n" +
                    "END;\n" +
                    "$\n" +
                    "\n" +
                    "delimiter ;"
            }))
                .ajouter(new Label({
                text: "Diagramme de classe de la dll :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new DivImage({
                typeCadre: EnumTypeCadreImage.Standard,
                Image: "Diagra"
            }))
                .ajouter(new Label({
                text: "Classe principal de la dll \"MysqlConnector\" :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                Langage: EnumLangageHighLightCode.Csharp,
                style: EnumStyleHighLightCode.visualStudio2015dark,
                text: "public class MysqlConnector\n" +
                    "{\n" +
                    "        #region Attributs\n" +
                    "\n" +
                    "        private MySqlConnection connection;\n" +
                    "        private MySqlCommand command;\n" +
                    "        private Dictionary<string, psMySQL> Procedures;\n" +
                    "\n" +
                    "        #endregion" +
                    "\n" +
                    "        [...]" +
                    "\n" +
                    "        #region Methodes\n" +
                    "        /// <summary>\n" +
                    "        /// Permet de selectionner les données d'une table de la base de donnée\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"TablesName\">Nom de la Table</param>\n" +
                    "        /// <param name=\"ListColums\">Noms des Colonnes(si null ou vide egale Toutes)</param>\n" +
                    "        /// <returns>DataTable de la Table</returns>\n" +
                    "        public DataTable Select(string TablesName, List<string> ListColums)\n" +
                    "        {\n" +
                    "            try\n" +
                    "            {\n" +
                    "                // Ouverture\n" +
                    "                this.connection.Open();\n" +
                    "\n" +
                    "                // colums\n" +
                    "                string Colums = \"\";\n" +
                    "                if (ListColums != null && ListColums.Count < 0)\n" +
                    "                {\n" +
                    "                    for (int i = 0, c = ListColums.Count - 2; c > i; i++)\n" +
                    "                        Colums += ListColums[i] + \",\";\n" +
                    "                    Colums += ListColums[ListColums.Count - 1];\n" +
                    "                }\n" +
                    "                else\n" +
                    "                    Colums = \"*\";\n" +
                    "\n" +
                    "                // Commande\n" +
                    "                this.command.CommandText = string.Format(\"SELECT {0} FROM {1}\", Colums, TablesName);\n" +
                    "\n" +
                    "                // Execution de la commande SQL\n" +
                    "                MySqlDataReader Lecteur = command.ExecuteReader();\n" +
                    "\n" +
                    "                // Retourne un DataTable\n" +
                    "                DataTable dt = new DataTable();\n" +
                    "                dt.Load(Lecteur);\n" +
                    "\n" +
                    "                return dt;\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                throw new Exception(\"Error MysqlConnector Select : \" + ex);\n" +
                    "            }\n" +
                    "            finally\n" +
                    "            {\n" +
                    "                this.command.CommandText = \"\";\n" +
                    "                this.connection.Close();\n" +
                    "            }\n" +
                    "        }\n" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Permet de selectionner les données d'une table de la base de donnée avec un Where\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"TablesName\">Nom de la Table</param>\n" +
                    "        /// <param name=\"ListColums\">Noms des Colonnes(si null ou vide egale Toutes)</param>\n" +
                    "        /// <param name=\"ListTest\">test a faire sur les colonnes</param>\n" +
                    "        /// <returns>DataTable de la Table</returns>\n" +
                    "        public DataTable Where(string TablesName, List<string> ListColums, List<string> ListTest)[...]" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Permet d'executer un Commande Mysql Externe a celle dans la class\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"cmd\">Commande a executer</param>\n" +
                    "        /// <returns>DataTable de la Table</returns>\n" +
                    "        public DataTable anything(MySqlCommand cmd)[...]" +
                    "        public int anythingNoQuery(MySqlCommand cmd)[...]" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Permet de Recuperer une procedure Stock par son nom dans le mysqlConnector Courant\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"NameProcedure\">Nom de la procedure a recuperer</param>\n" +
                    "        /// <returns>Retourne la Procedure demander</returns>\n" +
                    "        public psMySQL GetProcedure(string NameProcedure)[...]" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Permet de Recuperer une list de tous les nom des procedure stock dans le mysqlConnector Courant\n" +
                    "        /// </summary>\n" +
                    "        /// <returns>Retourne une liste de nom de procedure</returns>\n" +
                    "        public List<string> GetNamesProcecdures()\n" +
                    "        {\n" +
                    "            List<string> toSender = new List<string>();\n" +
                    "\n" +
                    "            foreach (string s in this.Procedures.Keys)\n" +
                    "                toSender.Add(s);\n" +
                    "\n" +
                    "            return toSender;\n" +
                    "        }\n" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Permet de Créer un procedure \"psMysql\" et de le stock dans le mysqlConnector Courant\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"NameProcedure\">Nom de la Procedure a Créer</param>\n" +
                    "        /// <returns>Retourne la Procedure Créer</returns>\n" +
                    "        public psMySQL CreateProcedure(string NameProcedure)[...]" +
                    "\n" +
                    "        #endregion" +
                    "\n}"
            }))
                .ajouter(new Label({
                text: "Classe \"psMySQL\", cette classe permet la gestion des procedures :",
                type: EnumTypeLabel.Standard
            }))
                .ajouter(new HighLight_Code({
                Langage: EnumLangageHighLightCode.Csharp,
                style: EnumStyleHighLightCode.visualStudio2015dark,
                text: "public class psMySQL\n" +
                    "{\n" +
                    "        #region Attributs\n" +
                    "\n" +
                    "        private MysqlConnector Connection;\n" +
                    "        private string Name;\n" +
                    "        private List<ParametrePs> Params;\n" +
                    "\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Constructeur\n" +
                    "        /// <summary>\n" +
                    "        /// Contructeur de la class psMySQL\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"NomeProcedure\">Nom de la procedure</param>\n" +
                    "        /// <param name=\"Connection\">Objet MysqlConnector a utiliser</param>\n" +
                    "        public psMySQL(string NomeProcedure, MysqlConnector Connection)\n" +
                    "        {\n" +
                    "            try\n" +
                    "            {\n" +
                    "                if (Connection != null)\n" +
                    "                    this.Connection = Connection;\n" +
                    "\n" +
                    "                this.Name = NomeProcedure;\n" +
                    "                this.Params = new List<ParametrePs>();\n" +
                    "                this.RecupeParam();\n" +
                    "\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                throw new Exception(\"Error psMySQL Instanciation : \" + ex);\n" +
                    "            }\n" +
                    "        }\n" +
                    "\n" +
                    "        #endregion\n" +
                    "\n" +
                    "        #region Methodes\n" +
                    "\n" +
                    "        // Private Methodes\n" +
                    "        private void RecupeParam()[...]\n" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Execute La Procedure\n" +
                    "        /// </summary>\n" +
                    "        /// <param name=\"param\">Dictionary devant Contenir les parametres utile pour la procedure</param>\n" +
                    "        public DataTable ExecuteProcedure(ref Dictionary<string, string> param)\n" +
                    "        {\n" +
                    "            try\n" +
                    "            {\n" +
                    "                MySqlCommand toExecute = new MySqlCommand(this.Name);\n" +
                    "                toExecute.CommandType = CommandType.StoredProcedure;\n" +
                    "                this.Params.OrderBy(p => p.Order);\n" +
                    "                foreach (ParametrePs p in this.Params)\n" +
                    "                {\n" +
                    "                    string Valeur = param[p.Name];\n" +
                    "\n" +
                    "                    if (Valeur != null)\n" +
                    "                    {\n" +
                    "                        toExecute.Parameters.AddWithValue(\"@\" + p.Name, Valeur);\n" +
                    "                        toExecute.Parameters[\"@\" + p.Name].Direction = p.ParametreDirection;\n" +
                    "                    }\n" +
                    "                    else\n" +
                    "                    {\n" +
                    "                        throw new Exception(\"Valeur du Dictionnaire egale a null\");\n" +
                    "                    }\n" +
                    "                }\n" +
                    "                DataTable toSender = this.Connection.anything(toExecute);\n" +
                    "\n" +
                    "                foreach (ParametrePs p in this.Params)\n" +
                    "                {\n" +
                    "                    param[p.Name] = toExecute.Parameters[\"@\" + p.Name].Value.ToString();\n" +
                    "                }\n" +
                    "\n" +
                    "                return toSender;\n" +
                    "            }\n" +
                    "            catch (Exception ex)\n" +
                    "            {\n" +
                    "                throw new Exception(\"Error PsMyql ExecuteProcedure : \" + ex);\n" +
                    "            }\n" +
                    "        }\n" +
                    "        public int ExecuteProcedureNoQuery(ref Dictionary<string, string> param)[...]\n" +
                    "\n" +
                    "        /// <summary>\n" +
                    "        /// Renvoi un dictonnaire avec les parametres de la procedure\n" +
                    "        /// </summary>\n" +
                    "        /// <returns>Dictionary avec en key les noms des parametre</returns>\n" +
                    "        public Dictionary<string, string> RecupeDicoParam()\n" +
                    "        {\n" +
                    "            Dictionary<string, string> toSender = new Dictionary<string, string>();\n" +
                    "\n" +
                    "            foreach (ParametrePs p in this.Params)\n" +
                    "                toSender.Add(p.Name, p.type);\n" +
                    "\n" +
                    "            return toSender;\n" +
                    "        }\n" +
                    "\n" +
                    "        #endregion\n" +
                    "}"
            }));
            mythis.page.AjouteContainte(divcontenu);
        };
        Object.defineProperty(mainPPE3_Mission_3.prototype, "x", {
            // Propriete implementer par elementX
            get: function () { return this.page.x; },
            enumerable: true,
            configurable: true
        });
        return mainPPE3_Mission_3;
    }());
    PPE3_Mission_3.mainPPE3_Mission_3 = mainPPE3_Mission_3;
})(PPE3_Mission_3 || (PPE3_Mission_3 = {}));
var PPE3_Mission_3;
(function (PPE3_Mission_3) {
    WebCall.call(function (ici) {
        ici.append(new PPE3_Mission_3.mainPPE3_Mission_3().x);
    });
})(PPE3_Mission_3 || (PPE3_Mission_3 = {}));
//# sourceMappingURL=app.js.map