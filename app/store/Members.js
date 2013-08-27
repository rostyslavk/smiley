Ext.define('smiley360.store.Members', {
	extend: 'Ext.data.Store',
	config: {
	    model: 'smiley360.model.Member',
	    storeId: 'membersStore',
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'membersProxy'
		}
	}
});