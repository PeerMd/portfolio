export function ProjectPreview({ tone }: { tone: string }) {
  return (
    <div className={`project-preview project-${tone}`} aria-hidden="true">
      <div className="preview-sidebar"><i /><i /><i /><i /></div>
      <div className="preview-main">
        <div className="preview-top"><span /><span /><span /></div>
        <div className="preview-stat-row"><i /><i /><i /></div>
        <div className="preview-chart"><b /><b /><b /><b /><b /><b /></div>
        <div className="preview-table"><span /><span /><span /><span /></div>
      </div>
    </div>
  );
}
