/*
 * Generated type guards for "commands.ts".
 * WARNING: Do not manually change this file.
 */
import { FindTextArgs, YankArgs, PasteArgs, MoveHalfPageArgs } from "./commands";

export function isFindTextArgs(obj: any, _argumentName?: string): obj is FindTextArgs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj.text === "string" &&
        typeof obj.select === "boolean" &&
        (typeof obj.till === "undefined" ||
            obj.till === false ||
            obj.till === true) &&
        (typeof obj.withinLine === "undefined" ||
            obj.withinLine === false ||
            obj.withinLine === true) &&
        (typeof obj.backward === "undefined" ||
            obj.backward === false ||
            obj.backward === true)
    )
}

export function isYankArgs(obj: any, _argumentName?: string): obj is YankArgs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (typeof obj.register === "undefined" ||
            typeof obj.register === "string")
    )
}

export function isPasteArgs(obj: any, _argumentName?: string): obj is PasteArgs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (typeof obj.register === "undefined" ||
            typeof obj.register === "string") &&
        (typeof obj.before === "undefined" ||
            obj.before === false ||
            obj.before === true)
    )
}

export function isMoveHalfPageArgs(obj: any, _argumentName?: string): obj is MoveHalfPageArgs {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (obj.direction === "up" ||
            obj.direction === "down")
    )
}
