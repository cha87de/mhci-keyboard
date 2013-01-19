/*
 * File: app/view/TestPanel.js
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

Ext.define('MyApp.view.TestPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.testpanel',

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'panel',
                flex: 1,
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'textareafield',
                        id: 'outputarea',
                        label: '',
                        readOnly: true
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'emptyKeyboard'
            }
        ]
    },

    getNextPhrase: function() {
        var phrases = [
        "ph1",
        "ph2",
        "ph3",
        "ph4"
        ];

        var randomIndex = 4;
        return phrases[randomIndex];
    },

    setKeyboard: function(keyboard) {
        this.removeAt(this.getItems().length-1);

        this.add(keyboard);
        keyboard.on('wordcomplete', function(word){
            this.checkCurrentWord(word);
        }, this);
    },

    checkCurrentWord: function(word) {
        // ToDo: ist word an aktueller Stelle richtig?
        // ToDo: abhängig davon rot oder grün einfärben.
        var words = this.phrase1.split(" ");
        var phraseWord = words[this.currentWord];
        // Prüfen word == phraseWord

        // Zähle Buckstaben: vom wort gesamt, falsche buchstaben
        // this.characterCounter += X;
        // this.characterErrorCounter += Y;

        this.currentWord++;
        if(this.currentWord > words.length){
            this.phrase1 = this.phrase2;
            this.phrase2 = this.getNextPhrase();
            this.currentWord = 0;
        }
    },

    startTest: function() {
        // hole ZWEI Phrases
        this.phrase1 = this.getNextPhrase();
        this.phrase2 = this.getNextPhrase();

        this.currentWord = 0;

        // ToDo: Print in outputPanel
        // this.getItem("outputPanel").setText(this.phrase1);
        // this.getItem("outputPanel").setText("<br/>");
        // this.getItem("outputPanel").setText(this.phrase2);

        this.characterCounter = 0;
        this.characterErrorCounter = 0;
    }

});