import { App, Editor, MarkdownPostProcessor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

const META_REGEX = RegExp("\{.*\}");

export default class ObsidianPandocSyntaxHighlighter extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((element, context) => {
			console.log("Registering processor");
			var metaBrackets = element.outerHTML.matchAll(META_REGEX);
			for (let bracket in metaBrackets) {
				console.log(bracket);
			}
		});
	}

	onunload() {

	}

	async saveSettings() {
	}

}