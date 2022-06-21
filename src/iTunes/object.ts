import { Object as WinaxObject } from "winax";

import { _iTunes } from "../interfaces/iTunes";

export const iTunesObject: _iTunes = new WinaxObject('iTunes.Application') as _iTunes;
