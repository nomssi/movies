sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("idv.movies.controller.NotFound", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf idv.movies.view.NotFound
		 */
		onInit: function () {
              UIComponent.getRouterFor(this).getRoute("NotFound").attachPatternMatched(this._onNotFoundMatched, this);
		},
		
        _onNotFoundMatched : function (oEvent) {
        	var oView = this.getView();
        },
        
        onNavBack : function () {
        	UIComponent.getRouterFor(this).navTo("Home");
        }
        
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf idv.movies.view.NotFound
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf idv.movies.view.NotFound
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf idv.movies.view.NotFound
		 */
		//	onExit: function() {
		//
		//	}

	});

});