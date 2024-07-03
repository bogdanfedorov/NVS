type Result = {
  errot: Error | string;
  result: string | object | number | null;
};

type Transport = (result: Result) => void;
