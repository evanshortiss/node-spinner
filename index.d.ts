
declare module "cli-spinner" {
  export class Spinner {
    constructor (title?: string)

    static setDefaultSpinnerString(spinnerString: string|number): Spinner
    static setDefaultSpinnerDelay(spinnerDelay: number): Spinner

    setSpinnerString(spinnerString: string|number): Spinner
    setSpinnerDelay(spinnerDelay: number): Spinner
    setSpinnerTitle(spinnerTitle: string): Spinner

    isSpinning(): boolean

    start(): Spinner
    stop(): Spinner
  }
}
