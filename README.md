# Swarbs - Sway Window Manager Auto-Rice Bootstrapping Scripts

A fork of LARBS (Luke's Auto-Rice Bootstrapping Scripts) converted from X11/dwm to Wayland/sway.

**Dotfiles are now provided by [swoidrice](https://gitlab.com/b.engineer/swoidrice)** - a complete
Wayland/Sway dotfiles repository with Gruvbox theming, Firefox browser, and comprehensive tool configurations.

## Installation:

On an Arch-based distribution as root, run the following:

```
curl -LO https://raw.githubusercontent.com/LukeSmithxyz/swarbs/master/static/swarbs.sh
sh swarbs.sh
```

That's it.

## What is Swarbs?

Swarbs is a script that autoinstalls and autoconfigures a fully-functioning
Wayland desktop environment using Sway, with a complete set of terminal-based
tools and configurations.

Swarbs can be run on a fresh install of Arch or Artix Linux, and provides you
with a fully configured diving-board for work or more customization.

## Key Differences from LARBS

| Component | LARBS (X11) | Swarbs (Wayland) |
|-----------|-------------|------------------|
| Window Manager | dwm | sway |
| Terminal | st | foot |
| Launcher | dmenu | rofi |
| Status Bar | dwmblocks | waybar |
| Lock Screen | slock | swaylock |
| Screenshot | maim | grim+slurp |
| Clipboard | xclip | wl-clipboard |

## Included Programs

By default, Swarbs installs programs listed in [static/progs.csv](static/progs.csv).

The main components include:
- **sway**: Wayland compositor (window manager)
- **foot**: Fast Wayland-native terminal emulator
- **rofi**: Application launcher and window switcher
- **waybar**: Modular status bar
- **swaylock**: Screen locker
- **grim/slurp**: Screenshot utilities
- **wl-clipboard**: Clipboard utilities
- **neovim**: Text editor
- **lf**: Terminal file manager
- **mpd/ncmpcpp**: Music player
- **newsboat**: RSS reader
- **Firefox**: Privacy-focused web browser with Arkenfox user.js integration

## Customization

You can customize Swarbs by modifying the default variables at the beginning of
the script or by giving the script these options:

- `-p`: custom programs list/dependencies (local file or URL)
- `-a`: a custom AUR helper

### The `progs.csv` list

Swarbs will parse the given programs list and install all given programs. Note
that the programs file must be a three column `.csv`.

The first column is a "tag" that determines how the program is installed:
- `""` (blank): Main repository
- `A`: AUR packages
- `G`: Git repositories (make && make install)
- `P`: Python packages (pip)

The second column is the name of the program in the repository, or the link to
the git repository, and the third column is a description.

## Default Keybindings

Swarbs uses dwm-like keybindings for familiarity:

- `$mod` (Super/Windows key): Main modifier
- `$mod+Return`: Open terminal (foot)
- `$mod+d`: Open launcher (rofi)
- `$mod+j`: Open file manager (lf)
- `$mod+w`: Open browser (firefox)
- `$mod+Shift+q`: Kill window
- `$mod+h/j/k/l`: Navigate windows
- `$mod+Shift+h/j/k/l`: Move windows
- `$mod+1-9`: Switch workspace
- `$mod+Shift+1-9`: Move window to workspace
- `$mod+f`: Toggle fullscreen
- `$mod+r`: Resize mode
- `Print`: Screenshot
- `$mod+Print`: Region screenshot

## Post-Installation

After installation:

1. Enable the display manager:
   ```
   systemctl enable ly
   ```

2. Reboot or start ly:
   ```
   systemctl start ly
   ```

3. Login through ly (default session: sway)

## Configuration Files

All configurations are provided by [swoidrice](https://gitlab.com/b.engineer/swoidrice) and installed to `~/.config/`:
- `sway/config`: Sway window manager configuration
- `waybar/config`: Waybar status bar configuration
- `waybar/style.css`: Waybar styling (Gruvbox theme)
- `foot/foot.ini`: Foot terminal configuration
- `rofi/config.rasi`: Rofi launcher configuration
- `swaylock/config`: Swaylock screen locker configuration
- `firefox/larbs.js`: Firefox privacy and security settings

For a complete list of configurations, see the [swoidrice repository](https://gitlab.com/b.engineer/swoidrice).

## Requirements

- Arch Linux or Artix Linux
- Internet connection
- Root access

## License

GNU GPLv3 (same as LARBS)

## Credits

- Original LARBS by Luke Smith <luke@lukesmith.xyz>
- Sway by Drew DeVault
- swoidrice dotfiles repository
- All the amazing open-source contributors
