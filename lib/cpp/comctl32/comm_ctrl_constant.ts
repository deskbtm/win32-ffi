//comctl32.dll Windows GUI module

/**
 * ListView messages
 */
export const LVM_FIRST = 0x1000;
/**
 * TreeView messages
 */
export const TV_FIRST = 0x1100;
/**
 * Header messages
 */
export const HDM_FIRST = 0x1200;
/**
 * Tab control messages
 */
export const TCM_FIRST = 0x1300;
/**
 * Pager control messages
 */
export const PGM_FIRST = 0x1400;
/**
 * Common control shared messages
 */
export const CCM_FIRST = 0x2000;
export const CCM_LAST = CCM_FIRST + 0x200;
/**
 * lParam is bkColor
 */
export const CCM_SETBKCOLOR = CCM_FIRST + 1;

export const LVS_ALIGNTOP = 0x0000;
export const LVS_ALIGNLEFT = 0x0800;
export const LVS_ALIGNMASK = 0x0c00;
export const LVS_OWNERDRAWFIXED = 0x0400;
export const LVS_NOCOLUMNHEADER = 0x4000;
export const LVS_NOSORTHEADER = 0x8000;

export const LVM_SETIMAGELIST = LVM_FIRST + 3;
export const LVM_GETITEMCOUNT = LVM_FIRST + 4;
export const LVM_GETITEMTEXTA = LVM_FIRST + 45;
export const LVM_GETHEADER = LVM_FIRST + 31;
export const LVM_GETITEMTEXTW = LVM_FIRST + 115;
