import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
    console.log('Расширение "my-first-extension" активировано');

    
    const disposable = vscode.commands.registerCommand(
        'my-first-extension.helloworld',
        () => {
            
            vscode.window.showInformationMessage(
                'Привет из моего первого расширения!'
            );
        }
    );

    
    context.subscriptions.push(disposable);
}


export function deactivate() {
    console.log('Расширение "my-first-extension" деактивировано');
}