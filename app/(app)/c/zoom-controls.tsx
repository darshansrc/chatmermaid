import { Button } from "@/components/ui/button";
import { Scan, ZoomIn, ZoomOut } from "lucide-react";
import { useReactFlow } from "reactflow";

const ZoomControls = () => {
  const reactFlowInstance = useReactFlow();

  reactFlowInstance.fitView();

  const handleZoomIn = () => {
    reactFlowInstance.zoomIn();
  };

  const handleZoomOut = () => {
    reactFlowInstance.zoomOut();
  };

  const handleReset = () => {
    reactFlowInstance.fitView();
  };

  return (
    <div className="absolute z-40 flex bg-neutral-900 border border-neutral-700 rounded-md flex-row gap-2 left-[50%] translate-x-[-50%] bottom-4">
      <Button
        size="icon"
        className="bg-neutral-900"
        variant="ghost"
        onClick={handleZoomIn}
      >
        <ZoomIn className="m-1" size={15} />
      </Button>
      <Button
        size="icon"
        className="bg-neutral-900"
        variant="ghost"
        onClick={handleReset}
      >
        <Scan className="m-1" size={15} />
      </Button>
      <Button
        size="icon"
        className="bg-neutral-900"
        variant="ghost"
        onClick={handleZoomOut}
      >
        <ZoomOut className="m-1" size={15} />
      </Button>
    </div>
  );
};

export default ZoomControls;
