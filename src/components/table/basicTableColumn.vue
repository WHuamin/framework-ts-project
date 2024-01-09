<template>
	<el-table-column v-bind="options">
		<template #default="scope">
			<template v-if="hasChildren">
				<basic-table-column
					v-for="childrenItem in options.columns"
					:key="childrenItem.prop"
					:options="childrenItem"></basic-table-column>
			</template>
			<span v-else-if="!options.type">{{ scope.row[options.prop] }}</span>
		</template>
	</el-table-column>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, ref } from 'vue'
const { options } = withDefaults(
	defineProps<{
		options: Table.Column
	}>(),
	{
		options: {
			columns: []
		}
	}
)
const hasChildren: boolean = ref(options?.columns?.length > 0 || false)
</script>
