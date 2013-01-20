/*
 * File: app/view/KeyboardFittsLaw.js
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

Ext.define('MyApp.view.KeyboardFittsLaw', {
    extend: 'Ext.Panel',
    alias: 'widget.KeyboardFittsLaw',

    config: {
        id: 'keyboardFittsLaw',
        margin: 5,
        ui: '',
        layout: {
            align: 'center',
            pack: 'center',
            type: 'hbox'
        },
        items: [
            {
                xtype: 'panel',
                flex: 1,
                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            align: 'start',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'mybutton',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '1'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton1',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '2'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton2',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '3'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton3',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '4'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton4',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '5'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton5',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '6'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'qwertPanel',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardQ',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'q'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardW',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'w'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardE',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'e'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardR',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'r'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardT',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 't'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'asdfgPanel',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardA',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'a'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardS',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 's'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardD',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'd'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardF',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'f'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardG',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'g'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'shzxcvPanel',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardShiftLeft',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'sh'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardZ',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'z'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardX',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'x'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardC',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'c'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardV',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'v'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keybaordSpaceLeft',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 320,
                                text: ''
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                items: [
                    {
                        xtype: 'textfield',
                        id: 'outputfield',
                        label: '',
                        name: 'outputfield',
                        readOnly: true
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            align: 'end',
                            pack: 'end',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'mybutton22',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '7'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton23',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '8'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton24',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '9'
                            },
                            {
                                xtype: 'button',
                                itemId: 'mybutton25',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: '0'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardBackSpace',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'bac'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'yuiopPanel',
                        layout: {
                            align: 'end',
                            pack: 'end',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardY',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'y'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardU',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'u'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardI',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'i'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardO',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'o'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardP',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'p'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'hjklPanel',
                        layout: {
                            align: 'end',
                            pack: 'end',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardH',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'h'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardJ',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'j'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardK',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'k'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardL',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'l'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'bnmshPanel',
                        layout: {
                            align: 'end',
                            pack: 'end',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardB',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 35,
                                text: 'b'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardN',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'n'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardM',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 50,
                                text: 'm'
                            },
                            {
                                xtype: 'button',
                                itemId: 'keyboardShiftRight',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 63,
                                text: 'sh'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            align: 'end',
                            pack: 'end',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'keyboardSpaceRight',
                                margin: 2,
                                minHeight: 39,
                                minWidth: 300,
                                text: ''
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#mybutton'
            },
            {
                fn: 'onMybutton1Tap',
                event: 'tap',
                delegate: '#mybutton1'
            },
            {
                fn: 'onMybutton2Tap',
                event: 'tap',
                delegate: '#mybutton2'
            },
            {
                fn: 'onMybutton3Tap',
                event: 'tap',
                delegate: '#mybutton3'
            },
            {
                fn: 'onMybutton4Tap',
                event: 'tap',
                delegate: '#mybutton4'
            },
            {
                fn: 'onMybutton5Tap',
                event: 'tap',
                delegate: '#mybutton5'
            },
            {
                fn: 'onMybutton23Tap',
                event: 'tap',
                delegate: '#mybutton23'
            },
            {
                fn: 'onMybutton24Tap',
                event: 'tap',
                delegate: '#mybutton24'
            },
            {
                fn: 'onMybutton25Tap',
                event: 'tap',
                delegate: '#mybutton25'
            },
            {
                fn: 'onKeyboardFittsLawActivate',
                event: 'activate'
            }
        ]
    },

    onMybuttonTap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"1");
    },

    onMybutton1Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"2");
    },

    onMybutton2Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"3");
    },

    onMybutton3Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"4");
    },

    onMybutton4Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"5");
    },

    onMybutton5Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"6");
    },

    onMybutton23Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"8");
    },

    onMybutton24Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"9");
    },

    onMybutton25Tap: function(button, e, options) {
        var outputfield = Ext.getCmp("outputfield");
        outputfield.setValue(outputfield.getValue()+"0");
    },

    onKeyboardFittsLawActivate: function(container, newActiveItem, oldActiveItem, options) {
        this.shift = false;
    }

});