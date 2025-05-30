import ChatGPTClient from './ChatGPTClient.js';

export default class DeepSeekClient extends ChatGPTClient {
    setOptions(options) {
        super.setOptions(options);
        const modelOptions = this.options.modelOptions || {};
        // default model for DeepSeek
        this.modelOptions.model = modelOptions.model || 'deepseek-chat';
        // Override completions URL if reverseProxyUrl not specified
        if (this.options.reverseProxyUrl) {
            this.completionsUrl = this.options.reverseProxyUrl;
        } else {
            this.completionsUrl = 'https://api.deepseek.com/v1/chat/completions';
        }
        return this;
    }
}
