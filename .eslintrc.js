module.exports = {
	parser: "babel-eslint",
	extends: ["airbnb", "prettier", "prettier/flowtype", "prettier/react"],
	plugins: ["flowtype", "react", "prettier"],
	rules: {
		"import/extensions": "off",
		"import/no-unresolved": "off",
		"react/require-default-props": "off",
		"react/jsx-filename-extension": "off",		
		"react/jsx-props-no-spreading": "off"
	},
	env: {
    "browser": true
  },
};
