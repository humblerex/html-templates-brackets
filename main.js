define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    
    // Function to run when the menu item is clicked
        
    function htmlTemplatesHandler() {
         var editor = EditorManager.getFocusedEditor();
        if (editor) {
            
            var _html_basic_template =
                "<!DOCTYPE html>" + "\n" +
                "<html>" + "\n" +
                "<head>" + "\n" +
                "\t" + "<title> Page Title </title>" + "\n" +
                "</head>" +"\n\n" +
                "\t" + "<body>" + "\n" +
                "\t" + "\t" + "<p>" + " This is a Paragraph " + "</p>" + "\n" +
                "\t" + "</body>" + "\n\n" +
                "</html>" +"\n"                
            ;
            
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(_html_basic_template, insertionPos);
        }
    }
    
    
    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "htmltemplates.humblerex";   // package-style naming to avoid collisions
    CommandManager.register("HTML Templates", MY_COMMAND_ID, htmlTemplatesHandler);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(MY_COMMAND_ID);
});