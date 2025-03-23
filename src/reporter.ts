import type { File, Reporter } from 'vitest'
import { AllureRuntime, AllureGroup, InMemoryAllureWriter } from 'allure-js-commons'

export class AllureVitestReporter implements Reporter {
    private runtime: AllureRuntime
    private writer: InMemoryAllureWriter
    private groupMap: Map<string, AllureGroup> = new Map()

    constructor() {
        this.writer = new InMemoryAllureWriter()
        this.runtime = new AllureRuntime({
            resultsDir: 'allure-results',
            writer: this.writer
        })
    }

    async onFileStart(file: File) {
        const group = this.runtime.startGroup(file.name)
        this.groupMap.set(file.name, group)
    }

    async onFileFinish(file: File) {
        const group = this.groupMap.get(file.name)
        if (group) group.endGroup()
    }

    async onAfterRun() {
        console.log('🧪 Allure results saved to ./allure-results')
    }
}
