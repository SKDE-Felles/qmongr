var labeled_x_axis_linear = function (selection, props){
  var {
    x_scale,
    inner_width,
    inner_height,
    x_axis_label,
    x_axis_label_fill,
    x_axis_label_offset = inner_height/6 ,
    x_axis_label_font_size = 9 + inner_width * 0.04  + "px",
    x_axis_tick_font_size = 7+ inner_width *0.02  + "px",
    x_axis_tick_font_fill,
    x_axis_tick_line_stroke,
    x_axis_tick_number = 6,
    x_axis_tick_size = inner_height,
    x_axis_tick_offset = inner_height * 0.05,
    x_axis_domain_line_stroke,
    x_axis_label_font_family 
  } = props;

  var x_axis = d3.axisBottom(x_scale)
    .tickSize(-x_axis_tick_size)
    .ticks(x_axis_tick_number)

  var x_axis_g = selection.selectAll('.x-axis').data([null]);
  x_axis_g = x_axis_g
    .enter().append('g')
      .attr('class', 'x-axis')
    .merge(x_axis_g)
      .attr('transform', `translate(0,${inner_height})`);
  x_axis_g.call(x_axis);
  x_axis_g
    .selectAll('.tick text')
      .style('font-size',  x_axis_tick_font_size)
      .attr('fill', x_axis_tick_font_fill)
      .attr("y",x_axis_tick_offset )
      ;
  x_axis_g
    .selectAll('.tick line')
      .attr('stroke', x_axis_tick_line_stroke);
  x_axis_g
    .select('.domain')
      .attr('stroke', x_axis_domain_line_stroke);

  var x_axis_label_text = x_axis_g.selectAll('.axis-label').data([null]);
  x_axis_label_text
    .enter().append('text')
      .attr('class', 'axis-label')
    .merge(x_axis_label_text)
      .attr('fill', x_axis_label_fill)
      .text(x_axis_label)
      .attr('x', inner_width / 2)
      .attr('y', x_axis_label_offset)
      .style('font-size',  x_axis_label_font_size)
      .style("font-family",  x_axis_label_font_family);

};
 

var labeled_y_axis_linear = function (selection, props){
  var {
    y_scale,
    inner_width,
    inner_height,
    y_axis_label = "Y axis",
    y_axis_label_fill = "black",
    y_axis_label_offset = inner_width * 0.15,
    y_axis_label_font_size = 7 + inner_width * 0.03 + "px",
    y_axis_label_font_family = "Areal",
    y_axis_tick_font_size = 10 + (inner_height * 0.04) + "px",
    y_axis_tick_distance_from_axis = 10 + (inner_width * 0.08),
    y_axis_tick_number,
    y_axis_tick_font_fill,
    y_axis_tick_line_stroke,
    y_axis_tick_size = inner_width,
    y_axis_domain_line_stroke,
  } = props;

  var y_axis = d3.axisLeft(y_scale)
    .ticks(y_axis_tick_number)
    .tickSize( y_axis_tick_size);
  var y_axis_g = selection.selectAll('.y-axis').data([null]);
  y_axis_g = y_axis_g
    .enter().append('g')
    .attr('class', 'y-axis')
    .merge(y_axis_g)
    .attr('transform', `translate(${inner_width},0)`);
  y_axis_g.call(y_axis);
  y_axis_g
    .selectAll('.tick text')
    .style('font-size',  y_axis_tick_font_size)
    .attr('fill', y_axis_tick_font_fill)
    .attr("x", y_axis_tick_distance_from_axis);
  y_axis_g
    .selectAll('.tick line')
    .attr('stroke', y_axis_tick_line_stroke);
  y_axis_g
    .select('.domain')
    .attr('stroke', y_axis_domain_line_stroke);
    
  var y_axis_label_text = y_axis_g.selectAll('.axis-label').data([null]);
  y_axis_label_text
    .enter().append('text')
    .attr('class', 'axis-label')
    .merge(y_axis_label_text)
      .attr('fill', y_axis_label_fill)
      .text(y_axis_label)
        .attr('transform', 'rotate(-90)')
        .attr('x', -inner_height / 2.3)
        .attr('y', y_axis_label_offset)
        .style('font-size',y_axis_label_font_size)
        .style('font-family', y_axis_label_font_family);
};

var labeled_x_axis_time = function (selection, props){
  var {
    x_scale,
    inner_width,
    inner_height,
    x_axis_tick_values,
    x_axis_label = "",
    x_axis_label_fill = "",
    x_axis_label_offset = 0,
    x_axis_label_font_size = 0,
    x_axis_label_font_family = "Areal",
    x_axis_tick_font_size = 10 + (inner_width * 0.015) + "px",
    x_axis_tick_distance_from_axis = 5 + (inner_height * 0.08),
    x_axis_tick_font_fill,
    x_axis_tick_line_stroke,
    x_axis_domain_line_stroke,
    x_axis_label_font_family,
  } = props;
  
  var x_axis = d3.axisBottom(x_scale)
    //.ticks(d3.timeYear.every()) 
    .tickValues(x_axis_tick_values)
    .tickFormat(d3.timeFormat("%Y"));
  var x_axis_g = selection.selectAll('.x-axis').data([null]);
  x_axis_g = x_axis_g
    .enter().append('g')
      .attr('class', 'x-axis')
    .merge(x_axis_g)
      .attr('transform', `translate(0,${inner_height})`);
  x_axis_g.call(x_axis);
  x_axis_g
    .selectAll('.tick text')
      .style('font-size', x_axis_tick_font_size)
      .attr('fill', x_axis_tick_font_fill)
      .attr("y",  x_axis_tick_distance_from_axis);
  x_axis_g
    .selectAll('.tick line')
      .attr('stroke', x_axis_tick_line_stroke);
  x_axis_g
    .select('.domain')
      .attr('stroke', x_axis_domain_line_stroke);

  var x_axis_label_text = x_axis_g.selectAll('.axis-label').data([null]);
  x_axis_label_text
    .enter().append('text')
      .attr('class', 'axis-label')
    .merge(x_axis_label_text)
      .attr('fill', x_axis_label_fill)
      .text(x_axis_label)
      .attr('x', inner_width / 2)
      .attr('y',x_axis_label_offset)
      .style('font-size',  x_axis_label_font_size + "px")
      .style("font-family",  x_axis_label_font_family);     
};

var color_legend_line_chart = function (selection, props){
  var {
    line_color_scale,
    margin = {left:0.1,right:0.1},
    inner_width,
    inner_height,
    position_left,
    legend_text_fill,
    legend_text_font_family,
    legend_text_font_size = 7 + inner_width * 0.01, 
    legend_text_offset = inner_width *0.02,
    legend_circle_radius = (15 + inner_width * 0.01)/2,
    legend_space_between_circles = inner_width * 0.25,
    legend_first_circle_offset =inner_width * 0.05

  } = props;
  

  var primary_legend_group = selection.selectAll(".line_chart_legend_table").data([null])
  var legend_container = primary_legend_group 
    .enter()
    .append("div")
    .merge(primary_legend_group)
      .attr("class", "line_chart_legend_table")
      .style("position", "relative")
      .style("top", "0")
      .style("left", `${margin.left * 100}%`)
      .style("width", `${(1-margin.left-margin.right) * 100}%`)
  var legend_list = legend_container.selectAll("ul").data([null])
    .enter()
    .append("ul")
    .merge(legend_container)
    .style("display","flex")
    .style("justify-content", "flex-start")
    .style("flex-wrap", "wrap")
  var legend = legend_list.selectAll("li").data(line_color_scale.domain())
  
  var legend_item = legend
    .enter()
    .append("li")
    .style("display", "inline-block")
    .style("margin", "5px")
    .style("display", "flex")
    
  legend.exit().remove() 
  
  legend_item
    .merge(legend)
    .on("mouseover", function(d){
      var Clicked_legend_opacity = d3.select(this)._groups[0][0].style.opacity;

      if (Clicked_legend_opacity == 1 || Clicked_legend_opacity === "" ) {
      d3.selectAll(`path`).style("opacity", 0.2)
      d3.select(`svg .${d.replace(/\s/g, '')}`).style("opacity", 1)
      }
      d3.select(this).style("cursor", "pointer")
    })
    .on("mouseout", function(d){
      d3.selectAll(`path`).style("opacity", 1)
      
    })
    .on("click", function(d){
      var Clicked_legend_opacity = d3.select(this)._groups[0][0].style.opacity;
  
      if (Clicked_legend_opacity == 1 || Clicked_legend_opacity === "" ) {
        d3.select(`svg path.${d.replace(/\s/g, '')}`).attr("visibility", "hidden")
        d3.select(this).style("opacity", 0.2) 
      } else {
        d3.select(`svg path.${d.replace(/\s/g, '')}`).attr("visibility", null)
        d3.select(this).style("opacity", 1) 
      }
    })
    legend_item
      .append("text")
      .merge(legend.select("text"))
      .text(d => d)

      .style("font-size", legend_text_font_size + "px")
      .style("font-family", legend_text_font_family)
      .style("fill", legend_text_fill)
      .style("padding", "5px")
      .style("background-color", line_color_scale)
      .style("border-radius", "5px")  
}

var y_axis_band = function (selection, props){
  var {
    y_scale,
    inner_width,
    inner_height,
    y_axis_label_font_family = "Areal",
    y_axis_tick_font_size = 3 + (inner_height * 0.04) + "px",
    y_axis_tick_distance_from_axis = (inner_width * 0.03),
    y_axis_tick_font_fill,
    y_axis_tick_line_stroke,
    y_axis_domain_line_stroke,
  } = props;

  var y_axis = d3.axisLeft(y_scale)
 
  var y_axis_g = selection.selectAll('.y-axis').data([null]);
  y_axis_g = y_axis_g
    .enter().append('g')
    .attr('class', 'y-axis')
    .merge(y_axis_g)
      
    //.attr('transform', `translate(0,${inner_height})`);
  y_axis_g.call(y_axis)
    .attr("text-anchor", "end");
  y_axis_g
    .selectAll('.tick text')
    .attr("x", - y_axis_tick_distance_from_axis)
    .style('font-size', y_axis_tick_font_size)
    .style("font-family",y_axis_label_font_family)
    .attr('fill', y_axis_tick_font_fill);
  y_axis_g
    .selectAll('.tick line')
    .attr('stroke', y_axis_tick_line_stroke);
  y_axis_g
    .select('.domain')
    .attr('stroke', y_axis_domain_line_stroke);
    
  
}