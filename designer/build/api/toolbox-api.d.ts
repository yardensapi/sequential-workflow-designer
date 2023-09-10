import { BehaviorController } from '../behaviors/behavior-controller';
import { SimpleEventListener, Vector } from '../core';
import { StepDefinition, ToolboxConfiguration, ToolboxGroupConfiguration, UidGenerator } from '../designer-configuration';
import { DesignerState } from '../designer-state';
import { DesignerContext } from '../designer-context';
import { IconProvider } from '../core/icon-provider';
export declare class ToolboxApi {
    private readonly state;
    private readonly designerContext;
    private readonly behaviorController;
    private readonly iconProvider;
    private readonly configuration;
    private readonly uidGenerator;
    constructor(state: DesignerState, designerContext: DesignerContext, behaviorController: BehaviorController, iconProvider: IconProvider, configuration: ToolboxConfiguration | false, uidGenerator: UidGenerator | undefined);
    isCollapsed(): boolean;
    toggleIsCollapsed(): void;
    subscribeIsCollapsed(listener: SimpleEventListener<boolean>): void;
    tryGetIconUrl(step: StepDefinition): string | null;
    getLabel(step: StepDefinition): string;
    filterGroups(filter: string | undefined): ToolboxGroupConfiguration[];
    /**
     * @param position Mouse or touch position.
     * @param step Step definition.
     * @returns If started dragging returns true, otherwise returns false.
     */
    tryDrag(position: Vector, step: StepDefinition): boolean;
    private activateStep;
    private getConfiguration;
}
