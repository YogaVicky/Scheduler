scheduler.config.xml_date = "%Y-%m-%d %h:%i";
scheduler.locale.labels.timeline_tab ="Timeline";

var sections=[
	{key:1, label:"James Smith"},
	{key:2, label:"John Williams"},
	{key:3, label:"David Miller"},
	{key:4, label:"Linda Brown"}
];

scheduler.createTimelineView({
	name:	"timeline",
	x_unit:	"minute",
	x_date:	"%H:%i",
	x_step:	30,
	x_size: 24,
	x_start: 16,
	x_length:	48,
	y_unit:	sections,
	y_property:	"section_id",
	render:"bar"
});

scheduler.templates.timeline_scale_label = function(key, label, section){ 
  console.log("key",key);
  console.log("label",label);
  console.log("section",section);
  return ; 
};

scheduler.init("scheduler_here",new Date(2009,5,30),"timeline");
scheduler.parse(big_events_list, "json");
