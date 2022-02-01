import { ReactElement } from "react";
import { RenderOptions, RenderResult } from '@testing-library/react';

export type CustomRender = (ui: ReactElement, options?: RenderOptions) => RenderResult;
