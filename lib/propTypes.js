'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // General
  data: _propTypes2.default.any,
  loading: _propTypes2.default.bool,
  showPagination: _propTypes2.default.bool,
  showPaginationTop: _propTypes2.default.bool,
  showPaginationBottom: _propTypes2.default.bool,
  showPageSizeOptions: _propTypes2.default.bool,
  pageSizeOptions: _propTypes2.default.array,
  defaultPageSize: _propTypes2.default.number,
  showPageJump: _propTypes2.default.bool,
  collapseOnSortingChange: _propTypes2.default.bool,
  collapseOnPageChange: _propTypes2.default.bool,
  collapseOnDataChange: _propTypes2.default.bool,
  freezeWhenExpanded: _propTypes2.default.bool,
  sortable: _propTypes2.default.bool,
  resizable: _propTypes2.default.bool,
  filterable: _propTypes2.default.bool,
  defaultSortDesc: _propTypes2.default.bool,
  defaultSorted: _propTypes2.default.array,
  defaultFiltered: _propTypes2.default.array,
  defaultResized: _propTypes2.default.array,
  defaultExpanded: _propTypes2.default.object,
  defaultFilterMethod: _propTypes2.default.func,
  defaultSortMethod: _propTypes2.default.func,

  // Controlled State Callbacks
  onPageChange: _propTypes2.default.func,
  onPageSizeChange: _propTypes2.default.func,
  onSortedChange: _propTypes2.default.func,
  onFilteredChange: _propTypes2.default.func,
  onResizedChange: _propTypes2.default.func,
  onExpandedChange: _propTypes2.default.func,

  // Pivoting
  pivotBy: _propTypes2.default.array,

  // Key Constants
  pivotValKey: _propTypes2.default.string,
  pivotIDKey: _propTypes2.default.string,
  subRowsKey: _propTypes2.default.string,
  aggregatedKey: _propTypes2.default.string,
  nestingLevelKey: _propTypes2.default.string,
  originalKey: _propTypes2.default.string,
  indexKey: _propTypes2.default.string,
  groupedByPivotKey: _propTypes2.default.string,

  // Server-side Callbacks
  onFetchData: _propTypes2.default.func,

  // Classes
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  // Component decorators
  getProps: _propTypes2.default.func,
  getTableProps: _propTypes2.default.func,
  getTheadGroupProps: _propTypes2.default.func,
  getTheadGroupTrProps: _propTypes2.default.func,
  getTheadGroupThProps: _propTypes2.default.func,
  getTheadProps: _propTypes2.default.func,
  getTheadTrProps: _propTypes2.default.func,
  getTheadThProps: _propTypes2.default.func,
  getTheadFilterProps: _propTypes2.default.func,
  getTheadFilterTrProps: _propTypes2.default.func,
  getTheadFilterThProps: _propTypes2.default.func,
  getTbodyProps: _propTypes2.default.func,
  getTrGroupProps: _propTypes2.default.func,
  getTrProps: _propTypes2.default.func,
  getTdProps: _propTypes2.default.func,
  getTfootProps: _propTypes2.default.func,
  getTfootTrProps: _propTypes2.default.func,
  getTfootTdProps: _propTypes2.default.func,
  getPaginationProps: _propTypes2.default.func,
  getLoadingProps: _propTypes2.default.func,
  getNoDataProps: _propTypes2.default.func,
  getResizerProps: _propTypes2.default.func,

  // Global Column Defaults
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    // Renderers
    Cell: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    Header: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    Footer: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    Aggregated: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    Pivot: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    PivotValue: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    Expander: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.func]),
    Filter: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),

    // All Columns
    sortable: _propTypes2.default.bool, // use table default
    resizable: _propTypes2.default.bool, // use table default
    filterable: _propTypes2.default.bool, // use table default
    show: _propTypes2.default.bool,
    minWidth: _propTypes2.default.number,

    // Cells only
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    getProps: _propTypes2.default.func,

    // Pivot only
    aggregate: _propTypes2.default.func,

    // Headers only
    headerClassName: _propTypes2.default.string,
    headerStyle: _propTypes2.default.object,
    getHeaderProps: _propTypes2.default.func,

    // Footers only
    footerClassName: _propTypes2.default.string,
    footerStyle: _propTypes2.default.object,
    getFooterProps: _propTypes2.default.object,
    filterMethod: _propTypes2.default.func,
    filterAll: _propTypes2.default.bool,
    sortMethod: _propTypes2.default.func
  })),

  // Global Expander Column Defaults
  expanderDefaults: _propTypes2.default.shape({
    sortable: _propTypes2.default.bool,
    resizable: _propTypes2.default.bool,
    filterable: _propTypes2.default.bool,
    width: _propTypes2.default.number
  }),

  pivotDefaults: _propTypes2.default.object,

  // Text
  previousText: _propTypes2.default.node,
  nextText: _propTypes2.default.node,
  loadingText: _propTypes2.default.node,
  noDataText: _propTypes2.default.node,
  pageText: _propTypes2.default.node,
  ofText: _propTypes2.default.node,
  rowsText: _propTypes2.default.node,

  // Components
  TableComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  TheadComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  TbodyComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  TrGroupComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  TrComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  ThComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  TdComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  TfootComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  FilterComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  ExpanderComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  PivotValueComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  AggregatedComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  // this is a computed default generated using
  PivotComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  PreviousComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  NextComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  LoadingComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  NoDataComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  ResizerComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  PadRowComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wVHlwZXMuanMiXSwibmFtZXMiOlsiZGF0YSIsIlByb3BUeXBlcyIsImFueSIsImxvYWRpbmciLCJib29sIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImFycmF5IiwiZGVmYXVsdFBhZ2VTaXplIiwibnVtYmVyIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwib2JqZWN0IiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZ1bmMiLCJkZWZhdWx0U29ydE1ldGhvZCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5Iiwic3RyaW5nIiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsImNvbHVtbnMiLCJhcnJheU9mIiwic2hhcGUiLCJDZWxsIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIkhlYWRlciIsIkZvb3RlciIsIkFnZ3JlZ2F0ZWQiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsIkZpbHRlciIsInNob3ciLCJtaW5XaWR0aCIsImFnZ3JlZ2F0ZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiZ2V0SGVhZGVyUHJvcHMiLCJmb290ZXJDbGFzc05hbWUiLCJmb290ZXJTdHlsZSIsImdldEZvb3RlclByb3BzIiwiZmlsdGVyTWV0aG9kIiwiZmlsdGVyQWxsIiwic29ydE1ldGhvZCIsImV4cGFuZGVyRGVmYXVsdHMiLCJ3aWR0aCIsInBpdm90RGVmYXVsdHMiLCJwcmV2aW91c1RleHQiLCJub2RlIiwibmV4dFRleHQiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJwYWdlVGV4dCIsIm9mVGV4dCIsInJvd3NUZXh0IiwiVGFibGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIlByZXZpb3VzQ29tcG9uZW50IiwiTmV4dENvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2I7QUFDQUEsUUFBTUMsb0JBQVVDLEdBRkg7QUFHYkMsV0FBU0Ysb0JBQVVHLElBSE47QUFJYkMsa0JBQWdCSixvQkFBVUcsSUFKYjtBQUtiRSxxQkFBbUJMLG9CQUFVRyxJQUxoQjtBQU1iRyx3QkFBc0JOLG9CQUFVRyxJQU5uQjtBQU9iSSx1QkFBcUJQLG9CQUFVRyxJQVBsQjtBQVFiSyxtQkFBaUJSLG9CQUFVUyxLQVJkO0FBU2JDLG1CQUFpQlYsb0JBQVVXLE1BVGQ7QUFVYkMsZ0JBQWNaLG9CQUFVRyxJQVZYO0FBV2JVLDJCQUF5QmIsb0JBQVVHLElBWHRCO0FBWWJXLHdCQUFzQmQsb0JBQVVHLElBWm5CO0FBYWJZLHdCQUFzQmYsb0JBQVVHLElBYm5CO0FBY2JhLHNCQUFvQmhCLG9CQUFVRyxJQWRqQjtBQWViYyxZQUFVakIsb0JBQVVHLElBZlA7QUFnQmJlLGFBQVdsQixvQkFBVUcsSUFoQlI7QUFpQmJnQixjQUFZbkIsb0JBQVVHLElBakJUO0FBa0JiaUIsbUJBQWlCcEIsb0JBQVVHLElBbEJkO0FBbUJia0IsaUJBQWVyQixvQkFBVVMsS0FuQlo7QUFvQmJhLG1CQUFpQnRCLG9CQUFVUyxLQXBCZDtBQXFCYmMsa0JBQWdCdkIsb0JBQVVTLEtBckJiO0FBc0JiZSxtQkFBaUJ4QixvQkFBVXlCLE1BdEJkO0FBdUJiQyx1QkFBcUIxQixvQkFBVTJCLElBdkJsQjtBQXdCYkMscUJBQW1CNUIsb0JBQVUyQixJQXhCaEI7O0FBMEJiO0FBQ0FFLGdCQUFjN0Isb0JBQVUyQixJQTNCWDtB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QVgsRUFBaUIzQixvQkFBVTJFLE9BQTNCLENBQXBCLENBOUpGO0FBK0piK0Msb0JBQWtCMUgsb0JBQVUwRSxTQUFWLENBQW9CLENBQUMxRSxvQkFBVTJCLElBQVgsRUFBaUIzQixvQkFBVTJFLE9BQTNCLENBQXBCLENBL0pMO0FBZ0tiZ0QsbUJBQWlCM0gsb0JBQVUwRSxTQUFWLENBQW9CLENBQUMxRSxvQkFBVTJCLElBQVgsRUFBaUIzQixvQkFBVTJFLE9BQTNCLENBQXBCLENBaEtKO0FBaUtiaUQsb0JBQWtCNUgsb0JBQVUwRSxTQUFWLENBQW9CLENBQUMxRSxvQkFBVTJCLElBQVgsRUFBaUIzQixvQkFBVTJFLE9BQTNCLENBQXBCLENBaktMO0FBa0tia0QsbUJBQWlCN0gsb0JBQVUwRSxTQUFWLENBQW9CLENBQUMxRSxvQkFBVTJCLElBQVgsRUFBaUIzQixvQkFBVTJFLE9BQTNCLENBQXBCO0FBbEtKLEMiLCJmaWxlIjoicHJvcFR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIEdlbmVyYWxcclxuICBkYXRhOiBQcm9wVHlwZXMuYW55LFxyXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dQYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93UGFnaW5hdGlvblRvcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd1BhZ2luYXRpb25Cb3R0b206IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dQYWdlU2l6ZU9wdGlvbnM6IFByb3BUeXBlcy5ib29sLFxyXG4gIHBhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIGRlZmF1bHRQYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICBzaG93UGFnZUp1bXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxyXG4gIGZyZWV6ZVdoZW5FeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJlc2l6YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZmlsdGVyYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGVmYXVsdFNvcnREZXNjOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkZWZhdWx0U29ydGVkOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgZGVmYXVsdEZpbHRlcmVkOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgZGVmYXVsdFJlc2l6ZWQ6IFByb3BUeXBlcy5hcnJheSxcclxuICBkZWZhdWx0RXhwYW5kZWQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZGVmYXVsdEZpbHRlck1ldGhvZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAvLyBDb250cm9sbGVkIFN0YXRlIENhbGxiYWNrc1xyXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25QYWdlU2l6ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Tb3J0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uRmlsdGVyZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uUmVzaXplZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25FeHBhbmRlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8vIFBpdm90aW5nXHJcbiAgcGl2b3RCeTogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAvLyBLZXkgQ29uc3RhbnRzXHJcbiAgcGl2b3RWYWxLZXk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGl2b3RJREtleTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzdWJSb3dzS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFnZ3JlZ2F0ZWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbmVzdGluZ0xldmVsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9yaWdpbmFsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGluZGV4S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGdyb3VwZWRCeVBpdm90S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAvLyBTZXJ2ZXItc2lkZSBDYWxsYmFja3NcclxuICBvbkZldGNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8vIENsYXNzZXNcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXHJcbiAgZ2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFRhYmxlUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFRoZWFkR3JvdXBQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VGhlYWRHcm91cFRyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRUaGVhZFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRUaGVhZFRyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFRoZWFkVGhQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFRib2R5UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFRyR3JvdXBQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VHJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VGRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VGZvb3RQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0VGZvb3RUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRUZm9vdFRkUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldFBhZ2luYXRpb25Qcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0TG9hZGluZ1Byb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXROb0RhdGFQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0UmVzaXplclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xyXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgLy8gUmVuZGVyZXJzXHJcbiAgICAgIENlbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgICBIZWFkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgICBGb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgICBBZ2dyZWdhdGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgICAgUGl2b3Q6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgICBQaXZvdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgICAgRXhwYW5kZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgICBGaWx0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxyXG5cclxuICAgICAgLy8gQWxsIENvbHVtbnNcclxuICAgICAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxyXG4gICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxyXG4gICAgICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcclxuICAgICAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgICAgLy8gQ2VsbHMgb25seVxyXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBnZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgICAvLyBQaXZvdCBvbmx5XHJcbiAgICAgIGFnZ3JlZ2F0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgICAvLyBIZWFkZXJzIG9ubHlcclxuICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgZ2V0SGVhZGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAgICAgLy8gRm9vdGVycyBvbmx5XHJcbiAgICAgIGZvb3RlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIGdldEZvb3RlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBmaWx0ZXJNZXRob2Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBmaWx0ZXJBbGw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICBzb3J0TWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIH0pXHJcbiAgKSxcclxuXHJcbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xyXG4gIGV4cGFuZGVyRGVmYXVsdHM6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZmlsdGVyYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9KSxcclxuXHJcbiAgcGl2b3REZWZhdWx0czogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgLy8gVGV4dFxyXG4gIHByZXZpb3VzVGV4dDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgbmV4dFRleHQ6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGxvYWRpbmdUZXh0OiBQcm9wVHlwZXMubm9kZSxcclxuICBub0RhdGFUZXh0OiBQcm9wVHlwZXMubm9kZSxcclxuICBwYWdlVGV4dDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgb2ZUZXh0OiBQcm9wVHlwZXMubm9kZSxcclxuICByb3dzVGV4dDogUHJvcFR5cGVzLm5vZGUsXHJcblxyXG4gIC8vIENvbXBvbmVudHNcclxuICBUYWJsZUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgVGhlYWRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIFRib2R5Q29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBUckdyb3VwQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBUckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgVGhDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIFRkQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBUZm9vdENvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgRmlsdGVyQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBFeHBhbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgUGl2b3RWYWx1ZUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgQWdncmVnYXRlZENvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgLy8gdGhpcyBpcyBhIGNvbXB1dGVkIGRlZmF1bHQgZ2VuZXJhdGVkIHVzaW5nXHJcbiAgUGl2b3RDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIC8vIHRoZSBFeHBhbmRlckNvbXBvbmVudCBhbmQgUGl2b3RWYWx1ZUNvbXBvbmVudCBhdCBydW4tdGltZSBpbiBtZXRob2RzLmpzXHJcbiAgUGFnaW5hdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgUHJldmlvdXNDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIE5leHRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIExvYWRpbmdDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIE5vRGF0YUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgUmVzaXplckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgUGFkUm93Q29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxufVxyXG4iXX0=