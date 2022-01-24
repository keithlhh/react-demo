import { MobXProviderContext } from "mobx-react";
import React from "react";

export function useStores(name:string) {
	return React.useContext(MobXProviderContext)[name];
}
