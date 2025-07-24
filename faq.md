# 常见问题

## MacOS 下，提示 “Copicseal.app”已损坏，无法打开。 你应该将它移到废纸篓。

![“Copicseal.app”已损坏，无法打开。 你应该将它移到废纸篓。](/images/macos_cannot_open.png)

由于 mac 应用未经过 Apple 公证，初次打开时可能会提示“应用已损坏”或无法验证开发者。可以通过以下命令跳过 Gatekeeper 校验：
```bash
sudo xattr -rd com.apple.quarantine /Applications/Copicseal.app
```
