/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button": {
                tap: 'onButtonTap'
            }
        }
    },

    onButtonTap: function(button, e, options) {

        if(button.getItemId().search(/keyboardShift.+/)!=-1){

            var keyboard = Ext.getCmp("keyboardFittsLaw");

            var qwert = Ext.getCmp("qwertPanel").items.items;
            var asdfg = Ext.getCmp("asdfgPanel").items.items;
            var shzxcv = Ext.getCmp("shzxcvPanel").items.items;
            var yuiop = Ext.getCmp("yuiopPanel").items.items;
            var hjkl = Ext.getCmp("hjklPanel").items.items;
            var bnmsh = Ext.getCmp("bnmshPanel").items.items;

            if(keyboard.shift){
                keyboard.shift = false;

                for(var i = 0;i<qwert.length;i++){
                    qwert[i].setText(qwert[i].getText().toLowerCase());
                    asdfg[i].setText(asdfg[i].getText().toLowerCase());
                    shzxcv[i].setText(shzxcv[i].getText().toLowerCase());
                    yuiop[i].setText(yuiop[i].getText().toLowerCase());
                }

                for(var i = 0;i<hjkl.length;i++){
                    hjkl[i].setText(hjkl[i].getText().toLowerCase());
                    bnmsh[i].setText(bnmsh[i].getText().toLowerCase());

                }

            }else{
                keyboard.shift = true;


                for(var i = 0;i<qwert.length;i++){
                    qwert[i].setText(qwert[i].getText().toUpperCase());
                    asdfg[i].setText(asdfg[i].getText().toUpperCase());
                    shzxcv[i].setText(shzxcv[i].getText().toUpperCase());
                    yuiop[i].setText(yuiop[i].getText().toUpperCase());
                }

                for(var i = 0;i<hjkl.length;i++){
                    hjkl[i].setText(hjkl[i].getText().toUpperCase());
                    bnmsh[i].setText(bnmsh[i].getText().toUpperCase());

                }

            }




        }else if(button.getItemId().search(/keyboardBackSpace/)!=-1){

            //todo handle backspace
            var outputfield = Ext.getCmp("outputfield");
            outputfield.setValue(outputfield.getValue().substring(0,outputfield.getValue().length-1));
        }
        else if(button.getItemId().search(/keyboardSpace.+/)!=-1){
            //todo handle space
            //var outputfield = Ext.getCmp("outputfield");
            //var outputarea = Ext.getCmp("outputarea");
            //outputarea.setValue(outputarea.getValue() + " " + outputfield.getValue());
            //outputfield.setValue("");
        }
        else if(button.getItemId().search(/keyboard.+/)!=-1){

            //todo schreibe in das outputfield den text des buttons
            //überprüfe ob schift gedrückt oder nicht

            //var outputfield = Ext.getCmp("outputfield");
            var typedChar = button.getText();

            var text = Ext.getCmp("outputfield").getValue() + typedChar;
            Ext.getCmp("outputfield").setValue(text);


        }

    }

});