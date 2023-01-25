import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

const createCtx = <T,>(defaultValue: T) => {
  type UpdateType = Dispatch<typeof defaultValue>;

  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    dispatch: defaultUpdate,
  });

  const useContextValue = () => {
    const context = useContext(ctx);
    if (context === undefined) throw new Error("error");
    return context;
  };

  const Provider = (props: PropsWithChildren) => {
    const [state, dispatch] = useState(defaultValue);

    const memoState = useMemo(() => ({ state, dispatch }), [dispatch, state]);

    return <ctx.Provider value={memoState} {...props} />;
  };

  return [useContextValue, Provider] as const;
};

export default createCtx;
