/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {

	function updateContent(event) {
		props.setAttributes({content: event.target.value})
	}

	function updateColor(event) {
		props.setAttributes({color: event.target.value})
	}

	return 	(
		React.createElement("div", null, /*#__PURE__*/
		React.createElement("label", null, "Veuillez entrer votre texte : "), /*#__PURE__*/
		React.createElement("input", {
		type: "text",
		value: props.attributes.content,
		placeholder: "texte...",
		onChange: updateContent
	  }), /*#__PURE__*/
	  React.createElement("fieldset", null, /*#__PURE__*/
	  React.createElement("legend", null, "Select a message color : "), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "primary",
		name: "color",
		value: "alert alert-primary",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "primary"
	  }, "Primary"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "secondary",
		name: "color",
		value: "alert alert-secondary",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "secondary"
	  }, "Secondary"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "success",
		name: "color",
		value: "alert alert-success",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "success"
	  }, "Success"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "danger",
		name: "color",
		value: "alert alert-danger",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "danger"
	  }, "Danger"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "warning",
		name: "color",
		value: "alert alert-warning",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "warning"
	  }, "Warning"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "info",
		name: "color",
		value: "alert alert-info",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "info"
	  }, "Info"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "ligth",
		name: "color",
		value: "alert alert-light",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "ligth"
	  }, "Ligth"), /*#__PURE__*/
	  React.createElement("input", {
		type: "radio",
		id: "dark",
		name: "color",
		value: "alert alert-dark",
		onChange: updateColor
	  }), /*#__PURE__*/
	  React.createElement("label", {
		for: "dark"
	  }, "Dark")))
)};

