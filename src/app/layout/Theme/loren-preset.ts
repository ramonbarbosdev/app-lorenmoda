import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const LorenPreset = definePreset(Lara, {
    semantic: {

        colorScheme: {
            light: {
                content: {
                    background: 'rgb(var(--bg-primary))',
                    borderColor: 'rgba(0, 0, 0, 0.08)',
                    color: 'rgb(var(--text-primary))'
                },
                surface: {
                    0: 'rgb(var(--bg-primary))',
                    50: 'rgb(var(--bg-primary))',
                    100: 'rgb(var(--bg-secundary))',
                    200: 'rgb(var(--bg-header))',
                    300: 'rgba(0,0,0,0.08)' // usado para bordas
                },

                primary: {
                    color: 'rgb(var(--accent))',
                    contrastColor: 'rgb(255 255 255)',
                    hoverColor: 'rgb(var(--hover))',
                    activeColor: 'rgb(var(--hover))'
                },

                text: {
                    color: 'rgb(var(--text-primary))',
                    mutedColor: 'rgb(var(--text-secondary))',
                    hoverColor: 'rgb(var(--hover))',
                    hoverMutedColor: 'rgb(var(--text-primary))'
                },

                highlight: {
                    background: 'rgba(var(--accent), 0.08)',
                    focusBackground: 'rgba(var(--accent), 0.12)',
                    color: 'rgb(var(--text-primary))',
                    focusColor: 'rgb(var(--text-primary))'
                },
              

                focusRing: {
                    shadow: '0 0 0 2px rgba(var(--accent), 0.3)'
                },
                formField: {
                    background: 'rgb(var(--bg-primary))',
                    borderColor: 'rgba(0,0,0,0.08)',
                    hoverBorderColor: 'rgb(var(--accent))',
                    focusBorderColor: 'rgb(var(--accent))',
                    invalidBorderColor: 'rgb(200, 50, 50)',

                    color: 'rgb(var(--text-primary))',
                    placeholderColor: 'rgb(var(--text-secondary))',

                    floatLabelColor: 'rgb(var(--text-secondary))',
                    floatLabelFocusColor: 'rgb(var(--accent))',
                    floatLabelActiveColor: 'rgb(var(--accent))',
                    floatLabelInvalidColor: 'rgb(200, 50, 50)',

                    iconColor: 'rgb(var(--text-secondary))'
                }
            },

            dark: {
                content: {
                    background: 'rgb(var(--bg-surface))',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'rgb(var(--text-primary))'
                },
                surface: {
                    0: 'rgb(var(--bg-primary))',
                    50: 'rgb(var(--bg-primary))',
                    100: 'rgb(var(--bg-surface))',
                    200: 'rgb(var(--bg-header))',
                    300: 'rgba(0,0,0,0.08)'
                },

                primary: {
                    color: 'rgb(var(--accent))',
                    contrastColor: 'rgb(0 0 0)',
                    hoverColor: 'rgb(var(--hover))',
                    activeColor: 'rgb(var(--hover))'
                },

                text: {
                    color: 'rgb(var(--text-primary))',
                    mutedColor: 'rgb(var(--text-secondary))',
                    hoverColor: 'rgb(var(--hover))',
                    hoverMutedColor: 'rgb(var(--text-primary))'
                },

                highlight: {
                    background: 'rgba(var(--accent), 0.2)',
                    color: 'rgb(var(--text-primary))'
                },

                focusRing: {
                    shadow: '0 0 0 2px rgba(var(--accent), 0.4)'
                },
                formField: {
                    background: 'rgb(var(--bg-surface))',
                    borderColor: 'rgba(255,255,255,0.08)',
                    hoverBorderColor: 'rgb(var(--accent))',
                    focusBorderColor: 'rgb(var(--accent))',
                    invalidBorderColor: 'rgb(255,100,100)',

                    color: 'rgb(var(--text-primary))',
                    placeholderColor: 'rgb(var(--text-secondary))',

                    floatLabelColor: 'rgb(var(--text-secondary))',
                    floatLabelFocusColor: 'rgb(var(--accent))',
                    floatLabelActiveColor: 'rgb(var(--accent))',
                    floatLabelInvalidColor: 'rgb(255,100,100)',

                    iconColor: 'rgb(var(--text-secondary))'
                }
            }
        }
    }
});