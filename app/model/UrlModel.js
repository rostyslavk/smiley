Ext.define("smiley360.model.UrlModel", {
    extend: "Ext.data.Model",
    requires: ['Ext.data.Validations'],
    config: {
        fields: [
			{ name: 'url', type: 'string' },
        ],
        validations: [
			{ type: 'format', field: 'url', matcher: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message: "Wrong URL format." },
        ]
    },

});