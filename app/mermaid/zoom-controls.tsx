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
    <div className="absolute z-40 flex flex-col gap-2 left-2 bottom-2">
      <Button size="icon" variant="secondary" onClick={handleZoomIn}>
        <ZoomIn className="m-1" size={15} />
      </Button>
      <Button size="icon" variant="secondary" onClick={handleReset}>
        <Scan className="m-1" size={15} />
      </Button>
      <Button size="icon" variant="secondary" onClick={handleZoomOut}>
        <ZoomOut className="m-1" size={15} />
      </Button>
    </div>
  );
};

export default ZoomControls;
