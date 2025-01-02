const A="data:image/png;base64,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";export{A as default};